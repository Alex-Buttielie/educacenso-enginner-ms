import DocenteIdentificacao from "../models/DocenteIdentificacao";
import { docenteIdentificacaoMapping } from "../utils/mapping-import/docenteIdentificacaoMapping";
import { fieldMappingDocenteIdentificacao } from "../utils/mapping-send-rabbitmq/fieldMappingDocenteIdentificacao";
import { sendToRabbitMQ } from "../utils/rabbitmq";
import { mapEntity } from "./mapEntity";
import { ObjectTransformer } from "./TransformObject";

type DocenteData = Record<string, any>;

export class DocenteIdentificacaoProcessor implements DataProcessor {
  async process(data: any): Promise<void> {
    let docenteData: DocenteData = {};
    docenteData = mapEntity(data, docenteData, docenteIdentificacaoMapping);
    const docenteIdentificacao = new DocenteIdentificacao(docenteData);
    const savedDocente = await docenteIdentificacao.save();
    const tranformObject = new ObjectTransformer(
      fieldMappingDocenteIdentificacao
    );
    const result = tranformObject.transform(savedDocente);
    const envio = { tipo: "docenteIndentificacao", dados: JSON.stringify(result) };
    await sendToRabbitMQ(envio);
  }
}

import Unidade from "../models/Unidade";
import { unidadeMapping } from "../utils/mapping-import/unidadeMapping";
import { fieldMappingUnidade } from "../utils/mapping-send-rabbitmq/fieldMappingUnidade";
import { sendToRabbitMQ } from "../utils/rabbitmq";
import { mapEntity } from "./mapEntity";
import { ObjectTransformer } from "./TransformObject";

type UnidadeData = Record<string, any>;

export class UnidadeProcessor implements DataProcessor {
  async process(data: any): Promise<void> {
    let unidadeData: UnidadeData = {};
    unidadeData = mapEntity(data, unidadeData, unidadeMapping);
    const unidade = new Unidade(unidadeData);
    const savedUnidade = await unidade.save();
    const tranformObject = new ObjectTransformer(fieldMappingUnidade);
    const result = tranformObject.transform(savedUnidade);
    const envio = { tipo: "unidade", dados: JSON.stringify(result) };
    await sendToRabbitMQ(envio);
  }
}

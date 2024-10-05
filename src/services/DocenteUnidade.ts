import DocenteUnidade from "../models/DocenteUnidade";
import { docenteUnidadeMapping } from "../utils/mapping-import/docenteUnidadeMapping";
import { mapEntity } from "./mapEntity";

type DocenteUnidadeData = Record<string, any>;

export class DocenteUnidadeProcessor implements DataProcessor {
  async process(data: any): Promise<void> {
    let docenteUnidadeData: DocenteUnidadeData = {};
    docenteUnidadeData = mapEntity(data, docenteUnidadeData, docenteUnidadeMapping);
    const docenteUndiade = new DocenteUnidade(docenteUnidadeData);
    const savedDocenteUnidade = await docenteUndiade.save();
    // console.log('Docente unidade salvo:', savedDocenteUnidade);
    // await sendToRabbitMQ(transformToSendFormat(docenteUndiade));
  }
}

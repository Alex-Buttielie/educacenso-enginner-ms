import DocenteDocumentos from "../models/DocenteDocumentos";
import { docenteDocumentosMapping } from "../utils/mapping-import/docenteDocumentosMapping";
import { mapEntity } from "./mapEntity";

type DocenteDocumentosEnderecoData = Record<string, any>;

export class DocenteDocumentosEnderecoProcessor implements DataProcessor {
  async process(data: any): Promise<void> {
    let docenteDocumentosEnderecoData: DocenteDocumentosEnderecoData = {};
    docenteDocumentosEnderecoData = mapEntity(
      data,
      docenteDocumentosEnderecoData,
      docenteDocumentosMapping
    );
    const docenteDocumentos = new DocenteDocumentos(
      docenteDocumentosEnderecoData
    );
    const savedDocenteDocumentos = await docenteDocumentos.save();
    // console.log('Docente documentos salvo:', savedDocenteDocumentos);
    // await sendToRabbitMQ(transformToSendFormat(docenteDocumentos));
  }
}

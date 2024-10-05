import Aluno from "../models/Aluno";
import { alunoMapping } from "../utils/mapping-import/alunoMapping";
import { fieldMappingDocenteIdentificacao } from "../utils/mapping-send-rabbitmq/fieldMappingDocenteIdentificacao";
import { sendToRabbitMQ } from "../utils/rabbitmq";
import { mapEntity } from "./mapEntity";
import { ObjectTransformer } from "./TransformObject";

type AlunoData = Record<string, any>;

export class AlunoProcessor implements DataProcessor {
  async process(data: any): Promise<void> {
    let alunoData: AlunoData = {};
    alunoData = mapEntity(data, alunoData, alunoMapping);
    const aluno = new Aluno(alunoData);
    const savedAluno = await aluno.save();
    //const tranformObject = new ObjectTransformer(fieldMappingDocenteIdentificacao);
    //const result = tranformObject.transform(savedAluno);
    //console.log('Turma para Envio: ', result)
    //const envio = {tipo: 'pessoa', dados: JSON.stringify(result)}
    //sendToRabbitMQ(envio);
  }
}

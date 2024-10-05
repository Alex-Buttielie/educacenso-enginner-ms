import Turma from "../models/Turma";
import { turmaMapping } from "../utils/mapping-import/turmaMapping";
import { fieldMappingTurma } from "../utils/mapping-send-rabbitmq/fieldMappingTurma";
import { sendToRabbitMQ } from "../utils/rabbitmq";
import { mapEntity } from "./mapEntity";
import { ObjectTransformer } from "./TransformObject";

type TurmaData = Record<string, any>;

export class TurmaProcessor implements DataProcessor {
    async process(data: any): Promise<void> {
        let turmaData: TurmaData = {}
        turmaData = mapEntity(data, turmaData, turmaMapping);
        const turma = new Turma(turmaData);
        const savedTurma = await turma.save();
        const tranformObject = new ObjectTransformer(fieldMappingTurma);
        const result = tranformObject.transform(savedTurma);
        const envio = { tipo: "turma", dados: JSON.stringify(result) };
        await sendToRabbitMQ(envio);
    }
}

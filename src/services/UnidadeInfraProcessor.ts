import UnidadeInfraestrutura from "../models/UnidadeInfraestrutura";
import { unidadeInfraestruturaMapping } from "../utils/mapping-import/unidadeInfraMapping";
import { mapEntity } from "./mapEntity";

type UnidadeInfraData = Record<string, any>;

export class UnidadeInfraProcessor implements DataProcessor {
    async process(data: any): Promise<void> {
        let unidadeInfraData: UnidadeInfraData = {}
        unidadeInfraData = mapEntity(data, unidadeInfraData, unidadeInfraestruturaMapping);
        const unidadeInfra = new UnidadeInfraestrutura(unidadeInfraData);
        const savedUnidadeInfra = await unidadeInfra.save();
        //console.log('Unidade Infra salva:', savedUnidadeInfra);
        // await sendToRabbitMQ(transformToSendFormat(unidade));
    }
}

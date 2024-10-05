import { personMapping } from '../utils/personMapping';
import { processors, ProcessorType } from './ProcessorType';

export const mapPersonData = (data: any): Record<string, any> => {
    const personData: Record<string, any> = {};
    for (const index in personMapping) {
        personData[personMapping[index]] = data[index];
    }
    return personData;
};

export const saveDataToDB = async (type: string, data: any) => {
    const processor = processors[type as ProcessorType];

    if (processor) {
        await processor.process(data);
    } else {
        console.warn(`No processor found for type: ${type}`);
    }
};

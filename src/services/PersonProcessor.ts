import Person from "../models/Person";
import { personMapping } from "../utils/personMapping";

type PersonData = Record<string, any>;

export class PersonProcessor implements DataProcessor {
    async process(data: any): Promise<void> {
        const personData = mapPersonData(data);
        const person = new Person(personData);
        const savedPerson = await person.save();
        //console.log('Pessoa salva:', savedPerson);
        // await sendToRabbitMQ(transformToSendFormat(person));
    }
}

const mapPersonData = (data: any): PersonData => {
    const personData: PersonData = {};
    for (const index in personMapping) {
        personData[personMapping[index]] = data[index];
    }
    return personData;
};

  
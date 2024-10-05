import { saveDataToDB } from '../../src/services/dataService';
import Person from '../../src/models/Person';

jest.mock('../../src/models/Person');

describe('Data Service', () => {
    it('should save a person', async () => {
        const mockRow = ['1', 'John Doe', '15', '08', '1990'];
        await saveDataToDB('1', mockRow);
        expect(Person).toHaveBeenCalled();
    });
});

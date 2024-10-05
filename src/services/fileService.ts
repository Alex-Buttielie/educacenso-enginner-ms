import fs from 'fs';
import { saveDataToDB } from '../services/dbProcessor';

export const processFile = (filePath: string) => {
    const readStream = fs.createReadStream(filePath, 'utf-8');
    let content = '';

    readStream
        .on('data', (data: string) => {
            content += data;
        })
        .on('end', async () => {
            const rows = parseContent(content);
            await saveRowsToDB(rows);
        })
        .on('error', (error) => {
            console.error('Error reading file:', error);
        });
};

const parseContent = (content: string): string[][] => {
    return content
        .split('\n')
        .filter(line => line.trim() !== '')
        .map(row => row.split('|').map(part => part.trim()));
};

export const saveRowsToDB = async (rows: string[][]) => {
    for (const [type, ...data] of rows) {
        await saveDataToDB(type, data);
       // console.log('Processed row:', type);
    }
};

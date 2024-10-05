import { Request, Response } from 'express';
import multer from 'multer';
import { processFile } from '../services/fileService';

const upload = multer({ dest: 'uploads/' });

export const uploadCsvController = async (req: Request, res: Response) => {
    upload.single('file')(req, res, async (err) => {
        if (err) {
            return res.status(400).json({ message: 'Error uploading file', error: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        try {
            processFile(req.file.path)
            res.status(200).json({ message: "File processed successfully" });
        }catch (error) {
            console.error('Error processing file:', error);
            res.status(500).json({ message: 'Internal server error' });
        }

    });

};


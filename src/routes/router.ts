import { Router } from 'express';
import { uploadCsvController } from '../controllers/uploadCsvController';

export  const router = Router();

router.post('/upload', uploadCsvController);


export default router;


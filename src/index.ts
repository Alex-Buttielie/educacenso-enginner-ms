import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import { router } from './routes/router';
import { config } from './config/config';  // Usando o arquivo config

dotenv.config();

const app = express();
app.use(express.json());
app.use(router);

const PORT = config.port || 3000;

const connectDB = async () => {
    try {
        await mongoose.connect(config.mongoUri || '');
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

connectDB();

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app;

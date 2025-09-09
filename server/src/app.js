import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import { dbStatus } from './config/db.js';

const app = express();

app.use(cors({
    
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res)=>{
    res.json({ok: true, db: dbStatus()});
})

export default app;
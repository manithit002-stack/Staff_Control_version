import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

const app = express();

app.use(cors({
    
    origin: process.env.CORS_ORIGIN || 'http://localhost:5173'
}));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res)=> res.json({ok: true}))

export default app;
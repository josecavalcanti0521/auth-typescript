import express, { Request, Response } from 'express'
import 'dotenv/config';
import router from './routes/authRoutes';

const app = express();

app.use(express.json());

app.use(router)

export default app;
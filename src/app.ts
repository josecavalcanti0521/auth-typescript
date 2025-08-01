import express, { Request, Response } from "express";
import "dotenv/config";
import router from "./routes/authRoutes";
import { errorHandler } from "./middlewares/errorHandler";

const app = express();

app.use(express.json());

app.use(router);

app.use(errorHandler);

export default app;

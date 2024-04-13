import express, { Express } from "express";
import { config } from "dotenv";
import cors from "cors";
export const app: Express = express();

config();

app.use(cors());
app.use(express.json());

const port: number = (process.env.PORT || 8080) as number;

app.listen(port, () => {
    console.log(`API is running on http://localhost:${port}`);
});

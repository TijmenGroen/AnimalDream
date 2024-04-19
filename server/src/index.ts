import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import router from "./routes";

export const app: Express = express();

config();

app.use(cors());
app.use(express.json());
app.use("/", router);

const port: number = (process.env.PORT || 8080) as number;

app.listen(port, () => {
    console.log(`SERVER is running on http://localhost:${port}`);
});


app.get("/", (_req: Request, res: Response) => {
    res.send("thiti").status(204)
})
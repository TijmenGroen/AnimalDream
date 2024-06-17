import express, { Express, Request, Response } from "express";
import { config } from "dotenv";
import cors from "cors";
import router from "./routes";

export const app: Express = express();

config();

const corsOptions: any = {
    origin: true,
    credentials: true,
  }

app.use(cors(corsOptions));
app.use(express.json());
app.use("/", router);

const port: number = (process.env.PORT || 8080) as number;

app.listen(port, () => {
    console.log(`SERVER is running on http://localhost:${port}`);
});


app.get("/", (_req: Request, res: Response) => {
    res.send("thiti").status(204)
})
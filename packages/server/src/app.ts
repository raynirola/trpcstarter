import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import express from "express";
import router, { createContext } from "@/trpc";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

dotenv.config();

const app = express();
const origin = new RegExp(`^https?://${process.env.ORIGIN}`);

console.log({ Origin: origin });

app.disable("x-powered-by");
app.use(morgan(":method :url :status"));
app.use(cors({ origin: origin, credentials: true }));
app.get("/", (_, res) => res.json({ status: "ok" }));
app.use("/api/v1", createExpressMiddleware({ router, createContext }));

export default app;

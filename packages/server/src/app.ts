import cors from "cors";
import morgan from "morgan";
import express from "express";
import router, { createContext } from "@/trpc";
import { createExpressMiddleware } from "@trpc/server/adapters/express";

const app = express();
app.use(morgan(":method :url :status"));
app.use(cors({ origin: /http:\/\/localhost:\d+/ }));
app.use("/trpc", createExpressMiddleware({ router, createContext }));

export default app;

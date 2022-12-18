import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const createContext = (opts: CreateExpressContextOptions) => ({
  ...opts,
});

type Context = inferAsyncReturnType<typeof createContext>;

const trpc = initTRPC.context<Context>().create();

const router = trpc.router({
  health: trpc.procedure.query(async () => {
    await delay(2000);
    return { status: Math.random() > 0.5 ? "ok" : "down" };
  }),
});

export type Router = typeof router;

export default router;

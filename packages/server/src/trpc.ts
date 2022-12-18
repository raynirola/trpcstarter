import { initTRPC, inferAsyncReturnType } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/adapters/express";

export const createContext = (opts: CreateExpressContextOptions) => ({
  ...opts,
});

type Context = inferAsyncReturnType<typeof createContext>;

const trpc = initTRPC.context<Context>().create();

const router = trpc.router({
  health: trpc.procedure.query(() => ({ status: "down" })),
});

export type Router = typeof router;

export default router;

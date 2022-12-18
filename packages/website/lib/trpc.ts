import { createTRPCReact } from "@trpc/react-query";
import type { Router } from "@packages/server/src/trpc";
export const trpc = createTRPCReact<Router>();

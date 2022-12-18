import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { trpc } from "../lib/trpc";

const queryClient = new QueryClient({});
const trpcClient = trpc.createClient({
  links: [httpBatchLink({ url: "http://localhost:8080/api/v1" })],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

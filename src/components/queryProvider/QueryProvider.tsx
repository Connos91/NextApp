"use client";

import { LoadingProvider } from "@/context/Context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

const QueryProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000 // 1 minute
          }
        }
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>{children}</LoadingProvider>
    </QueryClientProvider>
  );
};

export default QueryProvider;

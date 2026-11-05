"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 30,
        gcTime: 1000 * 60 * 60,
        retry: 2,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;

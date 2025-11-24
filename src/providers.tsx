"use client";

import { EchoProvider } from "@merit-systems/echo-next-sdk/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 60 * 1000, // 1 minute
						retry: 2,
					},
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			<EchoProvider config={{ appId: process.env.NEXT_PUBLIC_ECHO_APP_ID! }}>
				{children}
			</EchoProvider>
		</QueryClientProvider>
	);
}

"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface SearchPageClientProps {
	scrapeId: string;
	status: string;
}

export default function SearchPageClient({
	scrapeId,
	status,
}: SearchPageClientProps) {
	const router = useRouter();

	useEffect(() => {
		// If the search is still running, refresh every 5 seconds
		if (status === "pending" || status === "running") {
			const interval = setInterval(() => {
				router.refresh();
			}, 5000);

			return () => clearInterval(interval);
		}
	}, [status, router]);

	return null; // This is just a utility component
}

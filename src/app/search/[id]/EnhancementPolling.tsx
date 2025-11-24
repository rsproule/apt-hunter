"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface Enhancement {
	id: string;
	status: string;
	processedCount: number;
	totalCount: number;
}

interface EnhancementPollingProps {
	enhancementId: string | null;
	scrapeId: string;
	onUpdate?: () => void;
}

export default function EnhancementPolling({
	enhancementId,
	scrapeId,
	onUpdate,
}: EnhancementPollingProps) {
	const router = useRouter();
	const [isPolling, setIsPolling] = useState(false);

	// Poll for ANY pending/processing enhancements for this scrape
	useEffect(() => {
		let intervalId: NodeJS.Timeout;
		let isMounted = true;
		let pollCount = 0;
		const MAX_POLLS = 600; // 30 minutes (600 * 3 seconds)

		const pollForEnhancements = async () => {
			pollCount++;

			if (pollCount > MAX_POLLS) {
				console.warn("Exceeded max poll attempts");
				setIsPolling(false);
				clearInterval(intervalId);
				return;
			}

			try {
				// Check for any pending or processing enhancements
				const response = await fetch(`/api/enhancements?scrapeId=${scrapeId}`);

				if (!response.ok) {
					if (pollCount > 5) {
						setIsPolling(false);
						clearInterval(intervalId);
					}
					return;
				}

				const data = await response.json();
				const enhancements = data.enhancements as Enhancement[];

				console.log(
					`[Poll ${pollCount}] Enhancement statuses:`,
					enhancements.map((e) => ({ id: e.id.slice(-8), status: e.status })),
				);

				// Check if any are pending or processing
				const hasActive = enhancements.some(
					(e) => e.status === "pending" || e.status === "processing",
				);

				console.log(`[Poll ${pollCount}] hasActive=${hasActive}`);

				if (hasActive && isMounted) {
					setIsPolling(true);
					console.log(
						`[Poll ${pollCount}] Refreshing - active enhancements found`,
					);
					router.refresh();
					onUpdate?.();
				} else if (isMounted) {
					setIsPolling(false);
					console.log(`[Poll ${pollCount}] Stopping - no active enhancements`);
					router.refresh();
					onUpdate?.();
					clearInterval(intervalId);
				}
			} catch (error) {
				console.error("Error polling enhancements:", error);
				if (pollCount > 5) {
					setIsPolling(false);
					clearInterval(intervalId);
				}
			}
		};

		// Start polling immediately
		pollForEnhancements();
		intervalId = setInterval(pollForEnhancements, 3000);

		return () => {
			isMounted = false;
			clearInterval(intervalId);
		};
	}, [scrapeId, router, onUpdate]);

	if (!isPolling) return null;

	return (
		<div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50">
			<div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
			<span className="text-sm font-medium">Analyzing listings with AI...</span>
		</div>
	);
}

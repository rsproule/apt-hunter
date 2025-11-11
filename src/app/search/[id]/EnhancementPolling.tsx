"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Enhancement {
  id: string;
  status: string;
  processedCount: number;
  totalCount: number;
}

interface EnhancementPollingProps {
  enhancementId: string | null;
  onUpdate?: () => void;
}

export default function EnhancementPolling({
  enhancementId,
  onUpdate,
}: EnhancementPollingProps) {
  const router = useRouter();
  const [isPolling, setIsPolling] = useState(false);

  useEffect(() => {
    if (!enhancementId) return;

    let intervalId: NodeJS.Timeout;
    let isMounted = true;

    const pollEnhancement = async () => {
      try {
        const response = await fetch(`/api/enhancements/${enhancementId}`);

        if (!response.ok) {
          console.error("Failed to fetch enhancement status");
          return;
        }

        const data = await response.json();
        const enhancement = data.enhancement as Enhancement;

        // If processing, refresh the page to show updated results
        if (
          isMounted &&
          (enhancement.status === "processing" ||
            enhancement.status === "pending")
        ) {
          setIsPolling(true);
          // Refresh the page to get updated listings
          router.refresh();
          onUpdate?.();
        } else {
          // Enhancement completed or failed, stop polling
          setIsPolling(false);
          if (isMounted) {
            router.refresh();
            onUpdate?.();
          }
          clearInterval(intervalId);
        }
      } catch (error) {
        console.error("Error polling enhancement:", error);
      }
    };

    // Poll immediately
    pollEnhancement();

    // Then poll every 3 seconds
    intervalId = setInterval(pollEnhancement, 3000);

    return () => {
      isMounted = false;
      clearInterval(intervalId);
    };
  }, [enhancementId, router, onUpdate]);

  if (!enhancementId || !isPolling) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 z-50">
      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
      <span className="text-sm font-medium">
        Analyzing listings with AI...
      </span>
    </div>
  );
}


import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import type {
  SearchRequest,
  StartTaskResponse,
  GetResultsResponse,
  DownloadResultsRequest
} from '@/lib/apify-schemas';

// Start a new property search task
export const useStartPropertySearch = () => {
  return useMutation<StartTaskResponse, Error, SearchRequest>({
    mutationFn: async (searchParams) => {
      const response = await fetch('/api/apify/start-task', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchParams),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to start search');
      }

      return response.json();
    },
  });
};

// Check results for a running task
export const usePropertySearchResults = (runId: string | null, enabled = true) => {
  const queryClient = useQueryClient();
  const queryKey = ['property-search-results', runId];

  const query = useQuery<GetResultsResponse, Error>({
    queryKey,
    queryFn: async () => {
      if (!runId) throw new Error('Run ID is required');

      console.log('🔄 Fetching results for runId:', runId, 'at', new Date().toLocaleTimeString());
      const response = await fetch(`/api/apify/get-results?runId=${runId}`);

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch results');
      }

      const data = await response.json();
      console.log('📊 API Response:', data);
      return data;
    },
    enabled: enabled && Boolean(runId),
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });

  // Manual polling with useEffect
  useEffect(() => {
    if (!enabled || !runId || !query.data) {
      return;
    }

    // Only poll if task is not finished
    if (query.data.finished === false) {
      console.log('🔄 Setting up polling interval for status:', query.data.status);

      const interval = setInterval(() => {
        console.log('⏰ Manual polling trigger at', new Date().toLocaleTimeString());
        queryClient.invalidateQueries({ queryKey });
      }, 5000);

      return () => {
        console.log('🛑 Clearing polling interval');
        clearInterval(interval);
      };
    } else {
      console.log('✅ Task finished, no more polling needed. Status:', query.data.status);
    }
  }, [enabled, runId, query.data, queryClient, queryKey]);

  return query;
};

// Download results in specified format
export const useDownloadResults = () => {
  return useMutation<Blob, Error, DownloadResultsRequest>({
    mutationFn: async ({ runId, format }) => {
      const response = await fetch('/api/apify/get-results', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ runId, format }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to download results');
      }

      return response.blob();
    },
  });
};
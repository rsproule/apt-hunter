import { notFound, redirect } from "next/navigation";
import { prisma } from "@/lib/db";

interface SavedQueryPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function SavedQueryPage({ params }: SavedQueryPageProps) {
  const { id } = await params;

  // Fetch the saved query
  const savedQuery = await prisma.savedQuery.findUnique({
    where: { id },
  });

  if (!savedQuery) {
    notFound();
  }

  // If there's a last scrape, redirect to it
  if (savedQuery.lastScrapeId) {
    redirect(`/search/${savedQuery.lastScrapeId}`);
  }

  // Otherwise, redirect to review page
  redirect(`/saved-queries/${id}/review`);
}



"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useZillowUrlSearch } from "@/hooks/use-apify";
import { useState } from "react";

export default function SearchBar() {
  const [searchValue, setSearchValue] = useState("");
  const { mutate: startSearch, isPending } = useZillowUrlSearch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!searchValue.trim()) {
      return;
    }

    startSearch(searchValue, {
      onSuccess: (data) => {
        console.log("Search completed successfully:", data);
        console.log(`Found ${data.count} results`);
        // TODO: Handle successful search (e.g., redirect to results page or show results)
      },
      onError: (error) => {
        console.error("Search failed:", error);
        // TODO: Show error message to user
      },
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="flex w-full items-center gap-2">
        <Input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="copy zillow search string"
          className="flex-1"
          disabled={isPending}
        />
        <Button type="submit" disabled={isPending}>
          {isPending ? "Searching..." : "Search"}
        </Button>
      </form>
    </div>
  );
}

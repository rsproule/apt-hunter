"use client";

import { Loader2, XCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function HomePage() {
	const router = useRouter();
	const [searchUrl, setSearchUrl] = useState("");
	const [enhancementQuery, setEnhancementQuery] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [error, setError] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		setError(null);

		try {
			// Validate inputs
			if (!searchUrl.trim()) {
				throw new Error("Please enter a search URL");
			}
			if (!enhancementQuery.trim()) {
				throw new Error("Please enter an enhancement query");
			}

			// Validate URL format
			try {
				new URL(searchUrl);
			} catch {
				throw new Error("Please enter a valid URL");
			}

			// Start the workflow
			const response = await fetch("/api/workflow", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					searchUrl: searchUrl.trim(),
					enhancementQuery: enhancementQuery.trim(),
				}),
			});

			if (!response.ok) {
				const data = await response.json();
				throw new Error(data.error || "Failed to start workflow");
			}

			const data = await response.json();

			// Redirect to the search configuration page
			router.push(`/search/${data.configuration.id}`);
		} catch (err) {
			console.error("Error starting workflow:", err);
			setError(err instanceof Error ? err.message : "An error occurred");
			setIsSubmitting(false);
		}
	};

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-gray-900">
			<div className="container mx-auto px-4 py-16">
				<div className="max-w-3xl mx-auto space-y-8">
					{/* Header */}
					<div className="text-center space-y-4">
						<h1 className="text-5xl font-bold text-gray-900 dark:text-white">
							Apartment Hunter Agent
						</h1>
						<p className="text-xl text-gray-600 dark:text-gray-400">
							Find your perfect apartment
						</p>
					</div>

					{/* Main Form */}
					<Card className="shadow-lg">
						<CardHeader>
							<CardTitle>Start Your Search</CardTitle>
							<CardDescription>
								Paste a Zillow search URL and describe what you're looking for
							</CardDescription>
						</CardHeader>
						<CardContent>
							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Search URL */}
								<div className="space-y-2">
									<Label htmlFor="searchUrl">
										Zillow Search URL <span className="text-red-500">*</span>
									</Label>
									<Input
										id="searchUrl"
										type="url"
										value={searchUrl}
										onChange={(e) => setSearchUrl(e.target.value)}
										placeholder="https://www.zillow.com/homes/..."
										disabled={isSubmitting}
										className="font-mono text-sm"
									/>
									<p className="text-xs text-gray-500">
										Go to Zillow, search for apartments with your filters, and
										paste the URL here
									</p>
								</div>

								{/* Enhancement Query */}
								<div className="space-y-2">
									<Label htmlFor="enhancementQuery">
										What are you looking for?{" "}
										<span className="text-red-500">*</span>
									</Label>
									<Textarea
										id="enhancementQuery"
										value={enhancementQuery}
										onChange={(e) => setEnhancementQuery(e.target.value)}
										placeholder="e.g., modern kitchen with stainless steel appliances, hardwood floors, lots of natural light, outdoor space"
										disabled={isSubmitting}
										rows={4}
										className="resize-none"
									/>
									<p className="text-xs text-gray-500">
										Describe the features you care about.
									</p>
								</div>

								{/* Error message */}
								{error && (
									<div className="p-4 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-lg text-sm flex items-start gap-2">
										<XCircle className="h-5 w-5 shrink-0 mt-0.5" />
										<span>{error}</span>
									</div>
								)}

								{/* Submit Button */}
								<Button
									type="submit"
									disabled={isSubmitting}
									className="w-full h-12 text-lg"
									size="lg"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-5 w-5 animate-spin" />
											Starting Search...
										</>
									) : (
										"Find My Apartment"
									)}
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
}

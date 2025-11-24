"use client";

import { useRouter, useSearchParams } from "next/navigation";
import ListingRow from "@/app/search/[id]/ListingCard";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

interface Listing {
	id: string;
	zpid: string;
	detailUrl: string;
	imgSrc: string | null;
	photos: string[];
	hasImage: boolean;
	has3DModel: boolean;
	hasVideo: boolean;
	statusType: string;
	statusText: string;
	price: number;
	priceFormatted: string | null;
	currency: string;
	address: string;
	addressStreet: string | null;
	addressCity: string | null;
	addressState: string | null;
	addressZipcode: string | null;
	latitude: number | null;
	longitude: number | null;
	beds: number | null;
	baths: number | null;
	area: number | null;
	homeType: string | null;
	availabilityDate: Date | null;
	scrapedAt: Date;
	brokerName: string | null;
	zestimate: number | null;
	rentZestimate: number | null;
	isFeaturedListing: boolean;
	rawData: any;
}

interface EnhancementColumn {
	id: string;
	name: string;
	type: string;
	description: string;
	order: number;
}

interface EnhancementValue {
	listingId: string;
	values: Record<string, boolean | number>;
	compositeScore: number;
	status: string;
}

interface ListingsTableProps {
	listings: Array<{
		listing: Listing;
		enhancementResult?: EnhancementValue | null;
	}>;
	totalItems: number;
	currentPage: number;
	itemsPerPage: number;
	totalPages: number;
	enhancementColumns?: EnhancementColumn[];
}

export default function ListingsTable({
	listings,
	totalItems,
	currentPage,
	itemsPerPage,
	totalPages,
	enhancementColumns = [],
}: ListingsTableProps) {
	const router = useRouter();
	const searchParams = useSearchParams();

	// Update URL with new page
	const goToPage = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());
		router.push(`?${params.toString()}`);
	};

	// Update URL with new items per page and reset to page 1
	const handleItemsPerPageChange = (value: string) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("limit", value);
		params.set("page", "1");
		router.push(`?${params.toString()}`);
	};

	const startIndex = (currentPage - 1) * itemsPerPage;
	const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

	// Generate page numbers to display
	const getPageNumbers = () => {
		const pages: (number | string)[] = [];
		const maxVisible = 7;

		if (totalPages <= maxVisible) {
			// Show all pages
			for (let i = 1; i <= totalPages; i++) {
				pages.push(i);
			}
		} else {
			// Show first, last, and pages around current
			pages.push(1);

			if (currentPage > 3) {
				pages.push("...");
			}

			const start = Math.max(2, currentPage - 1);
			const end = Math.min(totalPages - 1, currentPage + 1);

			for (let i = start; i <= end; i++) {
				pages.push(i);
			}

			if (currentPage < totalPages - 2) {
				pages.push("...");
			}

			pages.push(totalPages);
		}

		return pages;
	};

	return (
		<div className="space-y-2">
			{/* Header */}
			<div className="flex items-center justify-between mb-2">
				<h2 className="text-2xl font-bold">Listings ({totalItems})</h2>
				<div className="flex items-center gap-4">
					<div className="flex items-center gap-2">
						<span className="text-sm text-gray-600">Show:</span>
						<Select
							value={itemsPerPage.toString()}
							onValueChange={handleItemsPerPageChange}
						>
							<SelectTrigger className="w-20">
								<SelectValue />
							</SelectTrigger>
							<SelectContent>
								<SelectItem value="10">10</SelectItem>
								<SelectItem value="25">25</SelectItem>
								<SelectItem value="50">50</SelectItem>
								<SelectItem value="100">100</SelectItem>
							</SelectContent>
						</Select>
					</div>
				</div>
			</div>

			{/* Table Header */}
			<div className="flex items-center gap-4 py-2 px-3 bg-gray-100 dark:bg-gray-800 border-y border-gray-200 dark:border-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 uppercase tracking-wider">
				<div className="w-24 shrink-0">Image</div>
				<div className="w-28 shrink-0">Price</div>
				<div className="w-32 shrink-0">Beds/Baths</div>
				<div className="w-24 shrink-0">Area</div>
				<div className="flex-1 min-w-0">Address</div>
				{enhancementColumns.length > 0 && (
					<>
						<div className="w-20 shrink-0 text-center">Score</div>
						<div className="w-24 shrink-0 text-center">Details</div>
					</>
				)}
				<div className="w-16 shrink-0">Link</div>
			</div>

			{/* Listings */}
			<div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
				{listings.map(({ listing, enhancementResult }) => (
					<ListingRow
						key={listing.id}
						listing={listing}
						enhancementColumns={enhancementColumns}
						enhancementResult={enhancementResult}
					/>
				))}
			</div>

			{/* Pagination Controls */}
			{totalPages > 1 && (
				<div className="flex items-center justify-between pt-4">
					<div className="text-sm text-gray-600">
						Showing {startIndex + 1}-{endIndex} of {totalItems}
					</div>

					<div className="flex items-center gap-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => goToPage(Math.max(1, currentPage - 1))}
							disabled={currentPage === 1}
						>
							Previous
						</Button>

						<div className="flex items-center gap-1">
							{getPageNumbers().map((page, index) =>
								typeof page === "number" ? (
									<Button
										key={index}
										variant={currentPage === page ? "default" : "outline"}
										size="sm"
										onClick={() => goToPage(page)}
										className="w-10"
									>
										{page}
									</Button>
								) : (
									<span key={index} className="px-2 text-gray-400">
										{page}
									</span>
								),
							)}
						</div>

						<Button
							variant="outline"
							size="sm"
							onClick={() => goToPage(Math.min(totalPages, currentPage + 1))}
							disabled={currentPage === totalPages}
						>
							Next
						</Button>
					</div>
				</div>
			)}
		</div>
	);
}

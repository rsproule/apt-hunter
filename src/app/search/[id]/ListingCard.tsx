"use client";

import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

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

interface ListingRowProps {
  listing: Listing;
  enhancementColumns?: EnhancementColumn[];
  enhancementResult?: EnhancementValue | null;
}

export default function ListingRow({ 
  listing,
  enhancementColumns = [],
  enhancementResult,
}: ListingRowProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderEnhancementValue = (column: EnhancementColumn) => {
    if (!enhancementResult || enhancementResult.status !== "completed") {
      return (
        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
      );
    }

    const value = enhancementResult.values[column.name];

    if (value === undefined || value === null) {
      return (
        <div className="w-2 h-2 rounded-full bg-gray-300 dark:bg-gray-600" />
      );
    }

    // Determine color based on value
    let colorClass;
    let displayValue;
    
    if (column.type === "boolean") {
      colorClass = value ? "bg-green-500" : "bg-red-500";
      displayValue = value ? "Yes" : "No";
    } else {
      // Score (0-10)
      const score = typeof value === "number" ? value : 0;
      if (score >= 8) {
        colorClass = "bg-green-500";
      } else if (score >= 6) {
        colorClass = "bg-lime-500";
      } else if (score >= 4) {
        colorClass = "bg-yellow-500";
      } else if (score >= 2) {
        colorClass = "bg-orange-500";
      } else {
        colorClass = "bg-red-500";
      }
      displayValue = `${score}/10`;
    }

    return (
      <Tooltip>
        <TooltipTrigger asChild>
          <div className={`w-2 h-2 rounded-full ${colorClass} cursor-help`} />
        </TooltipTrigger>
        <TooltipContent>
          <p className="font-medium">{column.description}</p>
          <p className="text-sm">{displayValue}</p>
        </TooltipContent>
      </Tooltip>
    );
  };

  const handleRowClick = () => {
    console.group(`🏠 Listing Debug: ${listing.address}`);
    console.log("📊 Database Object:", {
      id: listing.id,
      zpid: listing.zpid,
      address: listing.address,
      price: listing.price,
      beds: listing.beds,
      baths: listing.baths,
      area: listing.area,
      homeType: listing.homeType,
      statusType: listing.statusType,
      imgSrc: listing.imgSrc,
      has3DModel: listing.has3DModel,
      hasVideo: listing.hasVideo,
      detailUrl: listing.detailUrl,
      latitude: listing.latitude,
      longitude: listing.longitude,
    });
    console.log("🔍 Raw JSON from Zillow:", listing.rawData);
    console.log("📋 Full DB Object:", listing);
    console.groupEnd();
  };

  return (
    <div
      className="flex items-center gap-4 py-2 px-3 hover:bg-gray-50 dark:hover:bg-gray-800 cursor-pointer border-b border-gray-200 dark:border-gray-700 transition-colors"
      onClick={handleRowClick}
    >
      {/* Image */}
      <div className="flex-shrink-0 w-24 h-16 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
        {listing.imgSrc ? (
          <img
            src={listing.imgSrc}
            alt={listing.address}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
            No Image
          </div>
        )}
      </div>

      {/* Price */}
      <div className="w-28 flex-shrink-0 font-semibold text-sm">
        {formatPrice(listing.price)}
      </div>

      {/* Beds/Baths */}
      <div className="w-32 flex-shrink-0 text-sm text-gray-600 dark:text-gray-400">
        {listing.beds && listing.baths ? (
          <span>
            {listing.beds}bd / {listing.baths}ba
          </span>
        ) : listing.beds ? (
          <span>{listing.beds} beds</span>
        ) : listing.baths ? (
          <span>{listing.baths} baths</span>
        ) : (
          <span className="text-gray-400">—</span>
        )}
      </div>

      {/* Area */}
      <div className="w-24 flex-shrink-0 text-sm text-gray-600 dark:text-gray-400">
        {listing.area ? `${listing.area} sqft` : "—"}
      </div>

      {/* Address */}
      <div className="flex-1 min-w-0 text-sm">
        <div className="truncate font-medium">{listing.address}</div>
        {listing.homeType && (
          <div className="text-xs text-gray-500 capitalize">
            {listing.homeType.toLowerCase()}
          </div>
        )}
      </div>

      {/* Enhancement Score and Details */}
      {enhancementColumns.length > 0 && (
        <>
          {/* Composite Score */}
          <div className="w-20 flex-shrink-0 text-center">
            {enhancementResult && enhancementResult.status === "completed" ? (
              <div className="inline-flex items-center justify-center">
                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                  {enhancementResult.compositeScore.toFixed(1)}
                </span>
                <span className="text-xs text-gray-500 ml-0.5">/10</span>
              </div>
            ) : enhancementResult?.status === "pending" ? (
              <span className="text-xs text-gray-400">Pending</span>
            ) : enhancementResult?.status === "processing" ? (
              <span className="text-xs text-blue-500">...</span>
            ) : (
              <span className="text-xs text-gray-400">—</span>
            )}
          </div>

          {/* Enhancement Details - Grid of Dots */}
          <TooltipProvider delayDuration={100}>
            <div className="flex flex-wrap gap-1.5 w-24 flex-shrink-0 items-center justify-center">
              {enhancementColumns.map((col) => (
                <div key={col.id}>
                  {renderEnhancementValue(col)}
                </div>
              ))}
            </div>
          </TooltipProvider>
        </>
      )}

      {/* Link */}
      <a
        href={listing.detailUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 text-blue-600 hover:underline text-xs"
        onClick={(e) => e.stopPropagation()}
      >
        View →
      </a>
    </div>
  );
}


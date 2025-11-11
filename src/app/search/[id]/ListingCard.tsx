"use client";

import { Badge } from "@/components/ui/badge";

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

interface ListingRowProps {
  listing: Listing;
}

export default function ListingRow({ listing }: ListingRowProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
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

      {/* Badges */}
      <div className="flex gap-1 flex-shrink-0">
        {listing.has3DModel && (
          <Badge variant="secondary" className="text-xs">
            3D
          </Badge>
        )}
        {listing.hasVideo && (
          <Badge variant="secondary" className="text-xs">
            Video
          </Badge>
        )}
      </div>

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


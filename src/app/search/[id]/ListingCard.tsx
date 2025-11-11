"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

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

interface ListingCardProps {
  listing: Listing;
}

export default function ListingCard({ listing }: ListingCardProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCardClick = () => {
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
    <Card
      className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
      onClick={handleCardClick}
    >
      {listing.imgSrc && (
        <div className="relative h-48 bg-gray-200">
          <img
            src={listing.imgSrc}
            alt={listing.address}
            className="w-full h-full object-cover"
          />
          {listing.has3DModel && (
            <Badge className="absolute top-2 right-2">3D Tour</Badge>
          )}
          {listing.hasVideo && (
            <Badge className="absolute top-2 left-2">Video</Badge>
          )}
        </div>
      )}
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-2">
          <div className="text-2xl font-bold">{formatPrice(listing.price)}</div>
          <Badge variant="outline">{listing.statusType}</Badge>
        </div>

        <p className="text-sm text-gray-600 mb-2">{listing.address}</p>

        <div className="flex items-center gap-3 text-sm text-gray-700 mb-3">
          {listing.beds && <span>{listing.beds} beds</span>}
          {listing.baths && <span>{listing.baths} baths</span>}
          {listing.area && <span>{listing.area} sqft</span>}
        </div>

        {listing.homeType && (
          <p className="text-xs text-gray-500 mb-2 capitalize">
            {listing.homeType.toLowerCase()}
          </p>
        )}

        <a
          href={listing.detailUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline text-sm"
          onClick={(e) => e.stopPropagation()} // Prevent card click when clicking link
        >
          View on Zillow →
        </a>
      </CardContent>
    </Card>
  );
}


import { z } from "zod";

/**
 * Zillow listing schema - pragmatic validation
 * Only enforces structure on fields we care about for apartment hunting
 */
export const ZillowListingSchema = z
  .object({
    // Core identifiers
    zpid: z.string(),
    id: z.string(),
    detailUrl: z.string().url(),

    // Images
    imgSrc: z.string().url().optional(),
    hasImage: z.boolean().optional(),
    has3DModel: z.boolean().optional().default(false),
    hasVideo: z.boolean().optional().default(false),

    // Carousel photos
    carouselPhotosComposable: z
      .object({
        baseUrl: z.string().optional(),
        photoData: z
          .array(
            z.object({
              photoKey: z.string(),
            }),
          )
          .optional(),
      })
      .optional()
      .nullable(),

    // Status
    statusType: z.string(), // FOR_SALE, FOR_RENT, etc.
    statusText: z.string(),
    homeStatus: z.string().optional(),

  // Pricing
  price: z.string().optional(), // "$995,000" format
  unformattedPrice: z.number().optional(), // Some listings don't have prices
  currency: z.string().optional().default("USD"),

    // Location
    address: z.string(),
    addressStreet: z.string().optional(),
    addressCity: z.string().optional(),
    addressState: z.string().optional(),
    addressZipcode: z.string().optional(),

    latLong: z
      .object({
        latitude: z.number(),
        longitude: z.number(),
      })
      .optional(),

    // Property details
    beds: z.number().nullable().optional(),
    baths: z.number().nullable().optional(),
    area: z.number().nullable().optional(), // Square footage

    // Dates and timing
    variableData: z
      .object({
        type: z.string(),
        text: z.string(),
      })
      .optional()
      .nullable(),
    availabilityDate: z.string().nullable().optional(),

    // Type information
    homeType: z.string().optional(), // CONDO, APARTMENT, HOUSE, etc.

    // Broker/listing info
    brokerName: z.string().optional(),
    isZillowOwned: z.boolean().optional().default(false),

    // Extended data (optional, flexible)
    hdpData: z
      .object({
        homeInfo: z.record(z.string(), z.any()).optional(),
      })
      .optional()
      .nullable(),

    // Estimates
    zestimate: z.number().nullable().optional(),
    rentZestimate: z.number().nullable().optional(),

    // Additional flags
    isFeaturedListing: z.boolean().optional().default(false),
    isShowcaseListing: z.boolean().optional().default(false),
  })
  .passthrough(); // Allow additional fields we don't care about

export type ZillowListing = z.infer<typeof ZillowListingSchema>;

/**
 * Schema for the full Apify task result
 */
export const ZillowScraperResultSchema = z.object({
  success: z.boolean(),
  runId: z.string(),
  status: z.string(),
  results: z.array(ZillowListingSchema).optional(),
  count: z.number().optional(),
  error: z.string().optional(),
});

export type ZillowScraperResult = z.infer<typeof ZillowScraperResultSchema>;

/**
 * Helper to safely parse Zillow listings
 */
export function parseZillowListings(data: unknown[]): ZillowListing[] {
  const parsed: ZillowListing[] = [];
  const errors: Array<{ index: number; error: string }> = [];

  for (let i = 0; i < data.length; i++) {
    const result = ZillowListingSchema.safeParse(data[i]);
    if (result.success) {
      parsed.push(result.data);
    } else {
      errors.push({
        index: i,
        error: result.error.message,
      });
      console.warn(`Failed to parse listing at index ${i}:`, result.error);
    }
  }

  if (errors.length > 0) {
    console.warn(
      `Parsed ${parsed.length}/${data.length} listings (${errors.length} failed)`,
    );
  }

  return parsed;
}

/**
 * Extract photo URLs from carousel data
 */
export function extractPhotoUrls(listing: ZillowListing): string[] {
  const photos: string[] = [];

  // Get photos from carouselPhotosComposable
  if (
    listing.carouselPhotosComposable?.baseUrl &&
    listing.carouselPhotosComposable?.photoData
  ) {
    const baseUrl = listing.carouselPhotosComposable.baseUrl;
    for (const photo of listing.carouselPhotosComposable.photoData) {
      const url = baseUrl.replace("{photoKey}", photo.photoKey);
      photos.push(url);
    }
  }

  // Fallback to imgSrc if no carousel photos
  if (photos.length === 0 && listing.imgSrc) {
    photos.push(listing.imgSrc);
  }

  return photos;
}

/**
 * Extract the essential data for database storage
 */
export function extractListingForDb(listing: ZillowListing) {
  // Parse availabilityDate if it exists and is a string
  let availabilityDate: Date | null = null;
  if (listing.availabilityDate) {
    try {
      availabilityDate = new Date(listing.availabilityDate);
      // Check if date is valid
      if (Number.isNaN(availabilityDate.getTime())) {
        availabilityDate = null;
      }
    } catch {
      availabilityDate = null;
    }
  }

  return {
    zpid: listing.zpid,
    detailUrl: listing.detailUrl,
    imgSrc: listing.imgSrc || null,
    photos: extractPhotoUrls(listing),
    statusType: listing.statusType,
    statusText: listing.statusText,
    price: listing.unformattedPrice || 0, // Default to 0 if no price
    priceFormatted: listing.price || null,
    address: listing.address,
    addressStreet: listing.addressStreet || null,
    addressCity: listing.addressCity || null,
    addressState: listing.addressState || null,
    addressZipcode: listing.addressZipcode || null,
    latitude: listing.latLong?.latitude || null,
    longitude: listing.latLong?.longitude || null,
    beds: listing.beds || null,
    baths: listing.baths || null,
    area: listing.area || null,
    homeType: listing.homeType || null,
    availabilityDate,
    brokerName: listing.brokerName || null,
    zestimate: listing.zestimate || null,
    rentZestimate: listing.rentZestimate || null,
    hasImage: listing.hasImage || false,
    has3DModel: listing.has3DModel || false,
    hasVideo: listing.hasVideo || false,
    isFeaturedListing: listing.isFeaturedListing || false,
    rawData: listing, // Store full listing as JSON for future reference
  };
}

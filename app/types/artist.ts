// Export Artist, SocialLink and Contact types
export const SOCIAL_PLATFORMS = [
  "instagram",
  "tiktok",
  "facebook",
  "youtube",
  "youtubeMusic",
  "spotify",
  "appleMusic",
  "deezer",
  "tidal",
  "amazonMusic",
] as const;

export type SocialPlatform = (typeof SOCIAL_PLATFORMS)[number];

export interface Artist {
  id: string;
  name: string;
  genre: string;
  location: string;
  bio: string;
  imageUrl: string;
}

export interface SocialLink {
  platform: SocialPlatform;
  url: string;
  icon: string; // React icon component name
  label: string;
}

export interface ContactInfo {
  email: string;
  bookingEmail: string;
  // Add other contact methods if needed
}

// Type guard for SocialPlatform
export function isSocialPlatform(value: string): value is SocialPlatform {
  return SOCIAL_PLATFORMS.includes(value as SocialPlatform);
}

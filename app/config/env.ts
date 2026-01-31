import { z } from "zod";

// Schema for environment variables
const envSchema = z.object({
  // Site Configuration
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  NEXT_PUBLIC_SITE_NAME: z.string().default("KOSMOGENIT"),
  NEXT_PUBLIC_SITE_DESCRIPTION: z
    .string()
    .default(
      "Official website of Kosmogenit - Music Artist, Producer and Videographer.",
    ),

  // Artist Information
  NEXT_PUBLIC_ARTIST_NAME: z.string().default("Kosmogenit"),
  NEXT_PUBLIC_ARTIST_GENERE: z
    .string()
    .default("Pop/Acoustic/Indie/Electronic/WorldMusic"),
  NEXT_PUBLIC_ARTIST_LOCATION: z.string().default("Belgrade, Serbia"),

  // Social Media Links (could be empty for development)
  NEXT_PUBLIC_INSTAGRAM_URL: z.string().url().optional(),
  NEXT_PUBLIC_TIKTOK_URL: z.string().url().optional(),
  NEXT_PUBLIC_FACEBOOK_URL: z.string().url().optional(),
  NEXT_PUBLIC_YOUTUBE_URL: z.string().url().optional(),
  NEXT_PUBLIC_YOUTUBE_MUSIC_URL: z.string().url().optional(),
  NEXT_PUBLIC_SPOTIFY_URL: z.string().url().optional(),
  NEXT_PUBLIC_APPLE_MUSIC_URL: z.string().url().optional(),
  NEXT_PUBLIC_DEEZER_URL: z.string().url().optional(),
  NEXT_PUBLIC_TIDAL_URL: z.string().url().optional(),
  NEXT_PUBLIC_AMAZON_MUSIC_URL: z.string().url().optional(),

  // YouTube Configuration
  NEXT_PUBLIC_YOUTUBE_ALBUM_PLAYLIST_URL: z.string().url().optional(),
  NEXT_PUBLIC_YOUTUBE_LATEST_VIDEO_URL: z.string().url().optional(),

  // Contact Information
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().default("nasivo@gmail.com"),
  NEXT_PUBLIC_BOOKING_EMAIL: z.string().email().default("nasivo@gmail.com"),

  // Development
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
});

// Type inference for TypeScript
export type Env = z.infer<typeof envSchema>;

// Validate and parse environment variables
export const parsedEnv = envSchema.safeParse(process.env);

// Handle validation errors
if (!parsedEnv.success) {
  console.error(
    "❌ Invalid environment variables: ",
    parsedEnv.error.flatten().fieldErrors,
  );
  throw new Error("Invalid environment variables");
}

// Export validated environment variables
export const env = parsedEnv.data;

// Helpers to check the environment mode
export const isDevelopment = env.NODE_ENV === "development";
export const isProduction = env.NODE_ENV === "production";
export const isTest = env.NODE_ENV === "test";

// Site info helper
export const siteInfo = {
  name: env.NEXT_PUBLIC_SITE_NAME,
  url: env.NEXT_PUBLIC_SITE_URL,
  description: env.NEXT_PUBLIC_SITE_DESCRIPTION,
};

// Artist info helper
export const artistInfo = {
  name: env.NEXT_PUBLIC_ARTIST_NAME,
  genre: env.NEXT_PUBLIC_ARTIST_GENERE,
  location: env.NEXT_PUBLIC_ARTIST_LOCATION,
};

// Social links helper  (only includes defined links)
export const socialLinks = {
  instagram: env.NEXT_PUBLIC_INSTAGRAM_URL,
  tiktok: env.NEXT_PUBLIC_TIKTOK_URL,
  facebook: env.NEXT_PUBLIC_FACEBOOK_URL,
  youtube: env.NEXT_PUBLIC_YOUTUBE_URL,
  youtubeMusic: env.NEXT_PUBLIC_YOUTUBE_MUSIC_URL,
  spotify: env.NEXT_PUBLIC_SPOTIFY_URL,
  appleMusic: env.NEXT_PUBLIC_APPLE_MUSIC_URL,
  deezer: env.NEXT_PUBLIC_DEEZER_URL,
  tidal: env.NEXT_PUBLIC_TIDAL_URL,
  amazonMusic: env.NEXT_PUBLIC_AMAZON_MUSIC_URL,
} as const;

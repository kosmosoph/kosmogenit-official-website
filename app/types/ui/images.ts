/**
 * Image asset with different sizes
 */
export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: {
    thumbnail: string;
    small: string;
    medium: string;
    large: string;
  };
}

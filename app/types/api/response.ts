// import { PaginationMeta } from "./pagination";
import { PaginationMeta } from "./index";

/**
 * Generic API response type
 */
export interface ApiResponse<T> {
  data: T;
  error?: string;
  success: boolean;
  timestamp: Date;
}

/**
 * Paginated API response
 */
export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  meta: PaginationMeta;
}

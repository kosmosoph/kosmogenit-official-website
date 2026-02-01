/**
 * Generic form field error
 */
export interface FormFieldError {
  field: string;
  message: string;
}

/**
 * Validation error response
 */
export interface ValidationErrorResponse {
  errors: FormFieldError[];
}

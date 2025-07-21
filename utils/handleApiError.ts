export function handleApiError(
  error: unknown,
  customMessage = "API request failed"
): never {
  if (error instanceof Error) {
    console.error(`${customMessage}: ${error.message}`);
    throw new Error(`${customMessage}: ${error.message}`);
  } else {
    console.error(customMessage, error);
    throw new Error(customMessage);
  }
}

const isProd = process.env.NODE_ENV === "production";

/**
 * The basePath for the application.
 * In production, this is '/marathon-list', otherwise an empty string.
 * This is the single source of truth for basePath used in next.config.ts
 */
export const basePath = isProd ? "/marathon-list" : "";

/**
 * Creates a URL path with the appropriate basePath prepended.
 * @param path - The path to append to the basePath (should start with /)
 * @returns The full path including basePath
 */
export const withBasePath = (path: string): string => {
  return `${basePath}${path}`;
};

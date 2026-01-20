/**
 * Get the base path for assets and routes.
 * This is used for GitHub Pages deployment where the site is served from a subdirectory.
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Helper function to create a path with the base path prefix
 */
export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}

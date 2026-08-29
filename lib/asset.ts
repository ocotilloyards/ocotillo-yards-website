/** GitHub Pages project path. next/image does not prefix this on static export. */
export const BASE_PATH = "/ocotillo-yards-website";

export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}

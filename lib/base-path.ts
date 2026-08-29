/** GitHub Pages project site. Must prefix every public asset URL. */
export const BASE_PATH = "/ocotillo-yards-website";

export function asset(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${p}`;
}

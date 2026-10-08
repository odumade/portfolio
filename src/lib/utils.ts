export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function siteUrl(fallback: string) {
  return process.env.NEXT_PUBLIC_SITE_URL || fallback;
}

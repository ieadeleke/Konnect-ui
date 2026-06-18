/* ============================================================
   KONNECT — per-route SEO
   This is a client-rendered SPA, so two layers cover SEO:
   1. Static defaults live in index.html (what non-JS crawlers and
      social scrapers like Facebook/Slack read — same for every route).
   2. useSeo() updates the document head per route for crawlers that
      run JS (Google) and for correct browser-tab titles.
   We upsert tags (reuse the ones from index.html) so there is exactly
   one of each — no duplicate <title>/<meta>/<link>.
   ============================================================ */

import { useEffect } from "react";

export const SITE_URL = "https://konnectbd.com";
export const SITE_NAME = "Konnect";
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export type SeoInput = {
  /** Page-specific title; site name is appended automatically. */
  title: string;
  description: string;
  /** Route path beginning with "/", used for canonical + og:url. */
  path: string;
  image?: string;
  /** Set true on pages that shouldn't be indexed (e.g. /signup). */
  noindex?: boolean;
};

function upsertMeta(key: "name" | "property", value: string, content: string) {
  const selector = `meta[${key}="${value}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(key, value);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, path, image = DEFAULT_IMAGE, noindex = false }: SeoInput) {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const url = `${SITE_URL}${path}`;

    document.title = fullTitle;
    upsertMeta("name", "description", description);
    upsertMeta("name", "robots", noindex ? "noindex, follow" : "index, follow");
    upsertLink("canonical", url);

    // Open Graph
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);

    // Twitter
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image", image);
  }, [title, description, path, image, noindex]);
}

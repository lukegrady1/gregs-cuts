const SPACE_ID = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID ?? "";
const ACCESS_TOKEN = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN ?? "";
const BASE_URL = `https://cdn.contentful.com/spaces/${SPACE_ID}/environments/master/entries`;

export interface ContentfulRichText {
  nodeType: string;
  content: ContentfulRichTextNode[];
}

export interface ContentfulRichTextNode {
  nodeType: string;
  value?: string;
  content?: ContentfulRichTextNode[];
  marks?: { type: string }[];
  data?: { uri?: string };
}

export interface Update {
  body: ContentfulRichText;
  publishedAt: string;
}

export async function fetchUpdates(limit?: number): Promise<Update[]> {
  if (!SPACE_ID || !ACCESS_TOKEN) return [];

  const params = new URLSearchParams({
    access_token: ACCESS_TOKEN,
    content_type: "update",
    order: "-fields.publishedAt",
  });
  if (limit) params.set("limit", String(limit));

  const res = await fetch(`${BASE_URL}?${params}`);
  if (!res.ok) return [];

  const data = await res.json();
  return (data.items ?? []).map(
    (item: { fields: { body: ContentfulRichText; publishedAt: string } }) => ({
      body: item.fields.body,
      publishedAt: item.fields.publishedAt,
    }),
  );
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

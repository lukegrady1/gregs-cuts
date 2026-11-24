import { ABOUT_STORY, HOURS_LIST, SITE } from "@/lib/content";
import { MENU_EFFECTIVE, SERVICE_CATEGORIES } from "@/lib/services";

// /llms.txt (llmstxt.org): a plain-markdown summary of the shop for AI
// assistants and AI search, built from the same data as the pages and schema.
// Written to out/llms.txt at build time.
export const dynamic = "force-static";

const url = (path: string) => `${SITE.domain}${path}`;

export function GET() {
  const lines = [
    `# ${SITE.name}`,
    "",
    `> Barbershop in ${SITE.city}, ${SITE.state}, owned by Greg Weatherspoon since ${SITE.yearEstablished}: haircuts, fades, beard trims, hot towel finishes, styling and grooming services. Walk-ins welcome; call ahead to lock in a spot. "${SITE.tagline}"`,
    "",
    ABOUT_STORY.join("\n\n"),
    "",
    "## Business details",
    "",
    `- Name: ${SITE.name}`,
    `- Address: ${SITE.street}, ${SITE.city}, ${SITE.state} ${SITE.zip}`,
    `- Phone: ${SITE.phone}`,
    `- Google Maps: ${SITE.mapsUrl}`,
    `- Facebook: ${SITE.facebookUrl}`,
    `- Instagram: ${SITE.instagramUrl}`,
    "",
    "## Hours",
    "",
    ...HOURS_LIST.map((d) => `- ${d.label}: ${d.hours}`),
    "",
    `## Services and prices (menu effective ${MENU_EFFECTIVE})`,
    "",
    ...SERVICE_CATEGORIES.flatMap((c) => [
      `### ${c.title}`,
      "",
      ...(c.note ? [c.note, ""] : []),
      ...c.services.map(
        (s) => `- ${s.name}: ${s.price}${s.note ? ` (${s.note})` : ""}`,
      ),
      "",
    ]),
    "## Pages",
    "",
    `- [Home](${url("/")})`,
    `- [Services and prices](${url("/services/")})`,
    `- [About Greg](${url("/about/")})`,
    `- [Gallery: before and after](${url("/gallery/")})`,
    `- [Updates](${url("/updates/")})`,
    `- [Shop policies](${url("/policies/")})`,
    `- [Contact](${url("/contact/")})`,
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

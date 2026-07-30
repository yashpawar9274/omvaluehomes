import { project, SITE_URL } from "@/lib/site-data";

export function GET() {
  const body = `# BudgetHomes

> BudgetHomes is the real-estate marketing, buyer-education and lead-generation website for Fair Township by OM Value Homes in Palghar West. OM Group of Companies is the corporate parent. There is no separate OM Value Homes website.

## Canonical website
- ${SITE_URL}

## Verified project entity
- Project: Fair Township
- Marketing brand: OM Value Homes
- Corporate parent: OM Group of Companies
- Location: ${project.location}
- MahaRERA: ${project.rera}
- Railway distance: approximately 2.5 km from Palghar Railway Station
- Verified on: ${project.verifiedOn}

## Verified configurations
${project.configurations
  .map(
    (item) =>
      `- ${item.type}: ${item.price}; carpet ${item.carpet}; ${item.ready}`,
  )
  .join("\n")}

## Important pages
- Project details: ${SITE_URL}/projects/om-value-homes-palghar
- Flat tours: ${SITE_URL}/videos
- Buyer guides: ${SITE_URL}/guides
- Site visit: ${SITE_URL}/contact
- Marketing disclaimer: ${SITE_URL}/disclaimer

## Content policy
- Starting prices and inventory must be reconfirmed before booking.
- Proposed infrastructure is context, not a guaranteed return.
- Content uses answer-first summaries, dated verification notes and structured data.
`;
  return new Response(body, {
    headers: { "content-type": "text/plain; charset=utf-8" },
  });
}

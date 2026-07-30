import { createClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as Record<string, unknown>;
    const name = String(payload.name ?? "").trim();
    const phone = String(payload.phone ?? "").replace(/[^\d+]/g, "");

    if (!name || phone.replace(/\D/g, "").length < 10) {
      return Response.json(
        { error: "A valid name and phone number are required." },
        { status: 400 },
      );
    }

    const supabase = await createClient();
    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        name,
        phone,
        bhk: String(payload.bhk ?? "Not selected").slice(0, 50),
        budget: String(payload.budget ?? "Not specified").slice(0, 80),
        visit_date: String(payload.visitDate ?? "Flexible").slice(0, 40),
        source: String(payload.source ?? "website").slice(0, 80),
        page: String(payload.page ?? "/").slice(0, 200),
      })
      .select()
      .single();

    if (error) throw error;
    return Response.json({ lead }, { status: 201 });
  } catch {
    return Response.json(
      { error: "The enquiry could not be saved right now." },
      { status: 500 },
    );
  }
}

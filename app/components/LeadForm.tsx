"use client";

import { useState } from "react";
import { WHATSAPP_NUMBER } from "@/lib/site-data";

export function LeadForm({
  compact = false,
  source = "website",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );

  async function submit(formData: FormData) {
    setState("sending");
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      bhk: String(formData.get("bhk") ?? "Not selected"),
      budget: String(formData.get("budget") ?? "Not specified"),
      visitDate: String(formData.get("visitDate") ?? "Flexible"),
      source,
      page: window.location.pathname,
    };

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!response.ok) throw new Error("Lead could not be saved");

      const message = [
        "Hi, I want to enquire about Fair Township, Palghar West.",
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Preference: ${payload.bhk}`,
        `Budget: ${payload.budget}`,
        `Site Visit: ${payload.visitDate}`,
      ].join("\n");
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
        "_blank",
        "noopener,noreferrer",
      );
      setState("done");
    } catch {
      setState("error");
    }
  }

  if (state === "done") {
    return (
      <div className="form-success" role="status">
        <strong>Enquiry received.</strong>
        <span>WhatsApp par conversation continue karein.</span>
      </div>
    );
  }

  return (
    <form
      className={compact ? "lead-form compact" : "lead-form"}
      action={submit}
    >
      <label>
        <span>Name</span>
        <input name="name" required placeholder="Your full name" />
      </label>
      <label>
        <span>Phone</span>
        <input
          name="phone"
          required
          inputMode="tel"
          pattern="[0-9+\s-]{10,15}"
          placeholder="10-digit mobile number"
        />
      </label>
      <label>
        <span>Home preference</span>
        <select name="bhk" defaultValue="1 BHK">
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>Need guidance</option>
        </select>
      </label>
      {!compact && (
        <>
          <label>
            <span>Budget</span>
            <select name="budget" defaultValue="₹20–35 Lakhs">
              <option>Under ₹20 Lakhs</option>
              <option>₹20–35 Lakhs</option>
              <option>₹35–50 Lakhs</option>
              <option>Above ₹50 Lakhs</option>
            </select>
          </label>
          <label className="full-field">
            <span>Preferred site visit date</span>
            <input name="visitDate" type="date" />
          </label>
        </>
      )}
      <button
        className="button button-primary full-field"
        type="submit"
        disabled={state === "sending"}
      >
        {state === "sending" ? "Saving…" : "Get Details on WhatsApp"}
      </button>
      {state === "error" && (
        <p className="form-error full-field">
          Details save nahi ho paye. Please direct WhatsApp button use karein.
        </p>
      )}
      <p className="form-note full-field">
        No spam. Your details are used only for property assistance and site
        visit coordination.
      </p>
    </form>
  );
}

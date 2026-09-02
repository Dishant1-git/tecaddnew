/**
 * Fire-and-forget POST to the shared enquiry endpoint. Every form on the
 * site calls this with its own `source` tag so all submissions land in the
 * same `form_submissions` MySQL table without changing how the forms
 * already look or validate.
 */
export function submitEnquiry(
  source: string,
  data: Record<string, FormDataEntryValue | string | undefined>,
) {
  const payload = {
    source,
    pageUrl: typeof window !== "undefined" ? window.location.pathname : undefined,
    ...data,
  };

  fetch("/api/enquiry", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
    keepalive: true,
  }).catch((error) => {
    console.error("Enquiry submission failed:", error);
  });
}

import { redirect } from "next/navigation";

/** Legacy short slug → post-name permalink. */
export default function TermsRedirectPage() {
  redirect("/terms-and-conditions");
}

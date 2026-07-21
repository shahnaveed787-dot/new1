import { redirect } from "next/navigation";

/**
 * Former home slug kept as a postname URL for bookmarks/SEO.
 * Site home is now the domain root — redirect here permanently.
 */
export default function EasyAndSimpleTreeDrawingPostRedirect() {
  redirect("/");
}

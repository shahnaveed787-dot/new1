/**
 * Finds image files whose extension doesn't match real format
 * and renames them (e.g. WebP saved as .svg).
 * Run: node scripts/fix-image-extensions.mjs
 */
import { readdirSync, renameSync, readFileSync, statSync } from "node:fs";
import { join, extname, basename } from "node:path";

const root = join(import.meta.dirname, "..", "public", "images");

function detect(buf) {
  if (buf.length < 12) return null;
  if (buf[0] === 0x52 && buf[1] === 0x49 && buf[2] === 0x46 && buf[3] === 0x46) {
    const tag = buf.slice(8, 12).toString("ascii");
    if (tag === "WEBP") return "webp";
  }
  if (buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) return "png";
  if (buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) return "jpg";
  const head = buf.slice(0, 200).toString("utf8");
  if (/<svg|\<\?xml/i.test(head)) return "svg";
  return null;
}

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    const ext = extname(name).slice(1).toLowerCase();
    const real = detect(readFileSync(full));
    if (!real || real === ext) continue;
    const next = join(dir, `${basename(name, extname(name))}.${real}`);
    renameSync(full, next);
    console.log(`renamed ${name} -> ${basename(next)} (was ${ext}, real ${real})`);
  }
}

walk(root);
console.log("Done. Update any /images/... paths in src/content if filenames changed.");

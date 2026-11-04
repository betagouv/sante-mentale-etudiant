// Why this script exists:
// tarteaucitron is not a library we `import`: it is a standalone script that the
// browser loads by URL (/tarteaucitron/tarteaucitron.js) and that then fetches its own
// CSS and language files. So its files must be publicly served.
// Next.js only serves the /public folder. But `pnpm add tarteaucitronjs` puts the package
// in node_modules, which is NOT served. So we copy it into /public.
// It runs automatically when 'pnpm install' via 'postinstall' in package.json
import { cpSync, rmSync } from "node:fs";

// Remove the previous copy so files from an older version don't linger
rmSync("public/tarteaucitron", { recursive: true, force: true });

// Copy the package into /public
// dereference: true -> copy real files, not pnpm's symlinks (which break on CI/prod)
cpSync("node_modules/tarteaucitronjs", "public/tarteaucitron", {
  recursive: true,
  dereference: true,
});

console.log("tarteaucitron copied to public/tarteaucitron");

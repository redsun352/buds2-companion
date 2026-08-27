// Keep Expo config evaluation deterministic in CI/local builds.
// Environment variables are optional for this mobile build, so do not throw when .env is absent.
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
for (const filename of [".env", ".env.local"]) {
  const file = path.join(root, filename);
  if (!fs.existsSync(file)) continue;
  try {
    const dotenv = require("dotenv");
    dotenv.config({ path: file, override: false });
  } catch {
    // Optional environment loading must never block Expo config evaluation.
  }
}

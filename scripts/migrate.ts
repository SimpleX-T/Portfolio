/*
  Migration: seeds external JSON DB with local constants.
  Usage: set JSON_DB_URL env, then run: npx ts-node scripts/migrate.ts
*/
import { PROJECTS, certifications, workExperience } from "@/lib/constants";
import { jsonDbBaseUrl } from "@/lib/utils";

async function seed(resource: string, items: unknown[]) {
  const base = jsonDbBaseUrl();
  for (const item of items) {
    const res = await fetch(`${base}/${resource}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    });
    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Failed to seed ${resource}: ${res.status} ${text}`);
    }
  }
}

async function main() {
  await seed("projects", PROJECTS);
  await seed("certifications", certifications);
  await seed("workExperience", workExperience);
  console.log("Migration complete");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

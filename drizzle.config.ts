import type { Config } from "drizzle-kit";

export default {
    schema: "./src/server/lib/db.ts",
    out: "./drizzle",
} satisfies Config;
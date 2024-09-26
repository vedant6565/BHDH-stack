import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/db/schema.ts",
  dialect: "sqlite",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["test_*"],
} satisfies Config;

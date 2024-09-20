
import { defineConfig } from "drizzle-kit";



export default defineConfig({
  schema: "./utils/DrizDBSchema.tsx",
  out: "./migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: 'postgresql://gigendb_owner:M8XrTdZpGW6k@ep-quiet-forest-a5f64ezt.us-east-2.aws.neon.tech/gigendb?sslmode=require',
  },
});


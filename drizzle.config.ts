import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./drizzle/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://ai-short-generator-saas_owner:YXNZgb7qn3Fx@ep-curly-darkness-a5howp5c.us-east-2.aws.neon.tech/ai-short-generator-saas?sslmode=require",
  },
  verbose: true,
  strict: true,
});

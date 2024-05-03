import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { sql } from '@vercel/postgres';
import { db } from '@server/lib/db';

export const dbMigrate = async () => await migrate(db, { migrationsFolder: "drizzle" }).then(async () => await sql.end());

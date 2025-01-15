import { sql } from "drizzle-orm";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

// export const users = pgTable('games', {
//   id: serial('id').primaryKey(),
//   created_at: timestamp("created_at").defaultNow(),
//   updated_at: timestamp("updated_at").defaultNow(),
//   auth_id: text(),
// });

export const games = sqliteTable("games", {
  id: integer({ mode: "number" }).primaryKey({ autoIncrement: true }),
  created_at: integer({ mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
  updated_at: integer({ mode: "timestamp" })
    .notNull()
    .default(sql`(current_timestamp)`),
  name: text().notNull(),
  img: text(),
  is_score: integer({ mode: "boolean" }).notNull().default(true),
});

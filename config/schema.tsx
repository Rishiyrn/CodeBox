import { sub } from "date-fns";
import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  points: integer().default(0),
  subscriptionEnd: varchar()
});

export const CourseTable = pgTable("courses",{
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    CourseId : integer().notNull().unique(),
    title: varchar().notNull(),
    desc : varchar().notNull(),
    bannerImage : varchar().notNull(),
    level : varchar().default('Beginner'),
    tags: varchar()
})

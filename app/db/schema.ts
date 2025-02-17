import {pgTable, varchar, serial } from "drizzle-orm/pg-core"; 

export const users = pgTable("users", {
   id: serial('id').primaryKey(),
   username: varchar('username', {length: 50}).notNull(),
   email: varchar('email', {length: 50}).notNull().unique(),
   password: varchar('password', {length: 50}).notNull(),
  });
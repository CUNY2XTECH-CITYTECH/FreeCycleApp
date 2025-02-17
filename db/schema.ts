
import { boolean, integer, numeric, pgTable, text, uuid, varchar, timestamp, real } from "drizzle-orm/pg-core";


 export const usersTable = pgTable ("users", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 50 }).notNull(),
    email: varchar({ length: 100 }).notNull().unique(),
});

export const productsTable = pgTable("products", {
    id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 200 }).notNull(),
    description: text().notNull(),
    price: real().notNull(), 
    stock: integer().notNull(),
    category: varchar({ length: 50 }).notNull(),
    imageUrl: varchar({ length: 500 }).notNull(),
    created_at: timestamp().defaultNow().notNull(),
    updated_at: timestamp().defaultNow().notNull(),
    is_available: boolean().default(true).notNull(),
});

export const ordersTable = pgTable("orders", {
    id: uuid().primaryKey().defaultRandom(),
    user_id: uuid().notNull().references(() => usersTable.id),
    total_price: numeric().notNull(),
    status: varchar({ length: 50 }).notNull().default('pending'),
    created_at: timestamp().defaultNow().notNull(),
    updated_at: timestamp().defaultNow().notNull(),
    is_paid: boolean().default(false).notNull(),
});

export const orderDetailsTable = pgTable("order_details", {
    id: uuid().primaryKey().defaultRandom(),
    order_id: uuid().notNull().references(() => ordersTable.id),
    product_id: uuid().notNull().references(() => productsTable.id),
    quantity: integer().notNull().default(1),
    price_at_purchase: numeric().notNull(),
    subtotal: numeric().notNull(),
});
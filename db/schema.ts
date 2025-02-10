import { timestamp } from "drizzle-orm/pg-core";
import { boolean, integer, numeric, pgTable, text, uuid, varchar } from "drizzle-orm/pg-core";


 export const usersTable = pgTable ("users", {
    User_id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 50 }).notNull(),
    email: varchar({ length: 100 }).notNull().unique(),
});

export const productsTable = pgTable("products", {
    Product_id: uuid().primaryKey().defaultRandom(),
    name: varchar({ length: 200 }).notNull(),
    description: text().notNull(),
    price: numeric().notNull().$type<number>(), // $type<number>() is used to convert number to string because drizzle expects price to be a string.
    stock: integer().notNull(),
    category: varchar({ length: 50 }).notNull(),
    imageUrl: varchar({ length: 500 }).notNull(),
    created_at: timestamp().defaultNow().notNull(),
    updated_at: timestamp().defaultNow().notNull(),
    isAvailable: boolean().default(true).notNull(),
});

export const ordersTable = pgTable("orders", {
    order_id: uuid().primaryKey().defaultRandom(),
    user_id: uuid().notNull().references(() => usersTable.User_id),
    total_price: numeric().notNull(),
    status: varchar({ length: 50 }).notNull().default('pending'),
    created_at: timestamp().defaultNow().notNull(),
    updated_at: timestamp().defaultNow().notNull(),
    isPaid: boolean().default(false).notNull(),
});

export const orderDetailsTable = pgTable("order_details", {
    order_detail_id: uuid().primaryKey().defaultRandom(),
    order_id: uuid().notNull().references(() => ordersTable.order_id),
    product_id: uuid().notNull().references(() => productsTable.Product_id),
    quantity: integer().notNull().default(1),
    price_at_purchase: numeric().notNull(),
    subtotal: numeric().notNull(),
});
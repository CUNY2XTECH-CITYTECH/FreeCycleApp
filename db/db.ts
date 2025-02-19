import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from 'pg';
import * as schema from './schema';


// Check if environment variable DATABASE_URL is set before connecting
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

export const db = drizzle(pool, { schema });
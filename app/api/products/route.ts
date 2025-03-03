import { NextResponse } from 'next/server';
// import { Pool } from 'pg';
import { getAllProducts } from '../../../db/index.ts';

// const pool = new Pool({
//   connectionString: process.env.DATABASE_URL,
// });

export async function GET() {
  try {
    const result = await getAllProducts();
    const products = result;
    return NextResponse.json(products, { status: 200 });
  } catch (error) {
    console.error('Database query error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error},
      { status: 500 });
  }
}
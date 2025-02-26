import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export async function GET() {
  try {
    const result = await pool.query('SELECT * FROM posts');
    const posts = result.rows;
    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.error('Database query error:', error);
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
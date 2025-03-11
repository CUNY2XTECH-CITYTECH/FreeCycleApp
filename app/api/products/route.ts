import { NextResponse } from 'next/server';
// import { Pool } from 'pg';
import { getAllProducts } from '../../../db/index.ts';
import { createNewProduct } from '../../../db/index.ts';

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

export async function POST(req: Request) {
  try {
    console.log(req)
    const formData = await req.formData();
    const productData = {
      name: formData.get("name") as string,
      description: formData.get("description") as string,
      price: parseFloat(formData.get("price")as string),
      stock: parseInt(formData.get("stock") as string),
      category: formData.get("category") as string,
      imageUrl: formData.get("imageUrl") as string
    }
    console.log("product data: ",productData);
    const newProduct = await createNewProduct(productData);

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    console.error('Database insert error:', error);
    return NextResponse.json(
      { message: 'Internal Server Error', error: error },
      { status: 500 }
    );
  }
}
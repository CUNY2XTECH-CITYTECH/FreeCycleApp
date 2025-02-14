import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable, productsTable } from './schema';
import { eq } from 'drizzle-orm';


// USERS

// Connect to the database
//Check if environment variable DATABASE_URL is set before connecting
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined');
}
const db = drizzle(process.env.DATABASE_URL!);

interface User {
    name: string;
    email: string;
}

async function createNewUser(user: User) {
    await db
    .insert(usersTable)
    .values(user);
    console.log('New User Created');
}

async function getUser(user_id: string) {
    try {
        const user = await db
        .select()
        .from(usersTable)
        .where(eq(usersTable.id, user_id))
        .limit(1); // Ensures only one user is returned
        if (user.length === 0) {
            console.log('User not found');
            return null;
        }
        console.log('Getting user from the database', user)
        return user;
    } catch (error) {
        console.log('Error getting users', error);
    }
}

async function updateUser(email: string, newName: string) {
    //Update User
    await db
        .update(usersTable)
        .set({ name: newName })
        .where(eq(usersTable.email, email));
    console.log('User Info Updated');
}
    
async function deleteUser(email: string) {
     // Delete User
    await db
        .delete(usersTable)
        .where(eq(usersTable.email, email));
    console.log('User Deleted');
}


// PRODUCTS

interface Product {
    name: string;
    description: string;
    price: number;
    stock: number;
    category: string;
    imageUrl: string;
    created_at: Date;
    updated_at: Date;
    isAvailable: boolean;
}

async function createNewProduct(product: Product) {
    await db
    .insert(productsTable)
    .values(product);
    console.log('New Product Created');
}

async function getProduct(product_id: string) {
    try {
        const product = await db
            .select()
            .from(productsTable)
            .where(eq(productsTable.id, product_id)) 
            .limit(1); // Ensures only one product is returned
            if (product.length === 0) {
                console.log('Product not found');
                return null;
            }
        console.log('Getting product from the database:', product);
        return product;  // Returns the product data
    } catch (error) {
        console.log('Error getting product', error);
    }
}

async function updateProduct(name: string, newPrice: number) {
    await db
        .update(productsTable)
        .set({ price: newPrice })
        .where(eq(productsTable.name, name));
    console.log('Product Info Updated');
}

async function deleteProduct(product_id: string) {
    await db
        .delete(productsTable)
        .where(eq(productsTable.id, product_id));
    console.log('Product Deleted');
}
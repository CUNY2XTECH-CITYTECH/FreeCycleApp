import { usersTable, productsTable } from './schema';
import { eq } from 'drizzle-orm';
import { db } from './db';

// USERS

// Connect to the database

interface User {
    email: string;
    username: string;
    fullName: string;
}

async function createNewUser(user: User) {
    try {
        await db
        .insert(usersTable)
        .values(user)
        .returning()
        console.log('New User Created');
    } catch (error) {
        console.log('Error creating user: ', error)
    }
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
    try {
        await db
        .update(usersTable)
        .set({ fullName: newName })
        .where(eq(usersTable.email, email));
        console.log('User Info Updated');
    } catch (error) {
        console.log('Error updating user: ', error)
    }
}
    
async function deleteUser(email: string) {
    try {
        await db
        .delete(usersTable)
        .where(eq(usersTable.email, email));
        console.log('User Deleted');
    } catch (error) {
        console.log('Error deleting user: ', error)
    } 
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
    try {
        await db
        .insert(productsTable)
        .values(product);
        console.log('New Product Created');
    } catch (error) {
        console.log('Failed to create product: ', error)
    }
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
    try {
        await db
        .update(productsTable)
        .set({ price: newPrice })
        .where(eq(productsTable.name, name));
        console.log('Product Info Updated');
    } catch (error) {
        console.log('Error updating product') 
    }  
}

async function deleteProduct(product_id: string) {
    try {
        await db
        .delete(productsTable)
        .where(eq(productsTable.id, product_id));
        console.log('Product Deleted');
    } catch (error) {
        console.log('Error deleting product', error) 
    }
}

module.exports = {
    createNewUser,
    getUser,
    updateUser,
    deleteUser,
    createNewProduct,
    getProduct,
    updateProduct,
    deleteProduct
}
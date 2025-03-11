import { usersTable, productsTable, Product, NewProduct } from './schema';
import { eq } from 'drizzle-orm';
import { db } from './db';


// USERS

// Connect to the database

export interface User {
    email: string;
    username: string;
    fullName: string;
}

export async function createNewUser(user: User) {
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

export async function getUser(user_id: string) {
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

export async function updateUser(email: string, newName: string) {
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
    
export async function deleteUser(email: string) {
    try {
        await db
        .delete(usersTable)
        .where(eq(usersTable.email, email));
        console.log('User Deleted');
    } catch (error) {
        console.log('Error deleting user: ', error)
    } 
}

export async function createNewProduct(product: NewProduct) {
    try {
        console.log(product)
        const newProduct = await db
        .insert(productsTable)
        .values(product)
        .returning();
        console.log('New Product Created', newProduct);
        return newProduct;
    } catch (error) {
        console.log('Failed to create product: ', error);
        throw error;
    }
}

export async function getProduct(product_id: string) {
    try {
        const product = await db
            .select()
            .from(productsTable)
            .where(eq(productsTable.id, product_id)) 
            .limit(1); // Ensures only one product is returned
            if (product.length === 0) {
                console.log('Product not found');
                return [];
            }
        console.log('Getting product from the database:', product);
        return product;  // Returns the product data
    } catch (error) {
        console.log('Error getting product', error);
    }
}

export async function getAllProducts() {
    try {
        const products = await db
            .select()
            .from(productsTable)
            if (products.length === 0) {
                console.log('Products not found');
                return [];
            }
        console.log('Getting products from the database:', products);
        return products;  // Returns the products 
    } catch (error) {
        console.log('Error getting products', error);
    }
}

export async function updateProduct(name: string, newPrice: number) {
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

export async function deleteProduct(product_id: string) {
    try {
        await db
        .delete(productsTable)
        .where(eq(productsTable.id, product_id));
        console.log('Product Deleted');
    } catch (error) {
        console.log('Error deleting product', error) 
    }
}
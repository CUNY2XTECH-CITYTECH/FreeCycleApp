import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { usersTable } from './schema';
import { eq } from 'drizzle-orm';

const db = drizzle(process.env.DATABASE_URL!);

async function main() {
    // Create a new user
    const user: typeof usersTable.$inferInsert = {
        name: 'John Doe',
        email: 'johnDoe@example.com'
    };
    await db.insert(usersTable).values(user);
    console.log('New USer Created');

    // Get all users
    const users = await db.select().from(usersTable);
    console.log('Getting all users from the database', users)

    //Update User
    await db
        .update(usersTable)
        .set({ name: 'Jane Doe' })
        .where(eq(usersTable.email, user.email));
    console.log('User Info Updated');

    // Delete User
    await db
        .delete(usersTable)
        .where(eq(usersTable.email, user.email));
    console.log('User Deleted');
}

main();
import express, { Request, Response} from 'express';
import { db } from './db';
import { usersTable } from './schema';

const app = express();
app.use(express.json());

app.post('/create-account', async (req: Request, res: Response): Promise<void> => {
    const { username, email, fullName } = req.body

    if (!username || !email || !fullName){
        res.status(400).json({error:'Missing required fields'});
        return;
    }

    try {
        const newUser = await db.insert(usersTable).values({
            email,
            username,
            fullName
        }).returning(); 

        res.status(201).json({
            message: "Successfully created a new user",
            body: newUser
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Failed to create account' });
    }
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
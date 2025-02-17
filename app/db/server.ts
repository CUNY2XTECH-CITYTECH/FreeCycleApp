import express, { Request, Response} from 'express';
import { db } from './db';
import { users } from './schema';


const app = express();
app.use(express.json());


app.post('/create-account', async (req: Request, res: Response): Promise<void> => {
  const { username, email, password } = req.body;


    if (!username || !email || !password){
        res.status(400).json({error:'Missing required fields'});
        return;
    }

    try{
        const newUser = await db.insert(users).values({
            username,
            email,
            password,
        }).returning();
     
    
    res.status(201).json(newUser);
} catch (error){
    console.error(error);
    res.status(500).json({error: 'Failed to create account' });

}
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
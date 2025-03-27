import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import { Products, GetProductsByUserRequest } from './types';


const app = express();
const port = 3000;

app.use(bodyParser.json());

const products: Products[] = [
    { id: 1, userId: 1, title: '', content: '' },
  { id: 2, userId: 2, title: '', content:  ''},
  { id: 3, userId: 1, title: '', content: '' },
];

app.post('/api/products', (req: Request<{}, {}, GetProductsByUserRequest>, res: Response) => {
    const { userId } = req.body;

    if (!userId) {
        return res.status(400).json({ message: 'userId is required' });
      }
    
    const userProducts = products.filter(products => products.userId === userId);

    if (userProducts.length === 0) {
     return res.status(404).json({ message: 'No products found for this user' });
    }

    res.json(userProducts);
});
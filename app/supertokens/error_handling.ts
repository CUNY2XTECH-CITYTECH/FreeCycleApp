import express from "express";
import { errorHandler } from "supertokens-node/framework/express";

const app = express();

// ...your API routes

// Add this AFTER all your routes
app.use(errorHandler());

// your own error handler

// commenting out until route is finished
// app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
// 	/* ... */
// });
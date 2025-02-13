import express, { Request, Response, NextFunction } from "express";
import { errorHandler } from "supertokens-node/framework/express";

let app = express();

// ...your API routes

// Add this AFTER all your routes
app.use(errorHandler());

// your own error handler
app.use((err: unknown, req: Request, res: Response, next: NextFunction) => {
	/* ... */
});
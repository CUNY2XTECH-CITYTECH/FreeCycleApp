import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
      try {
        const result = await pool.query("SELECT * FROM posts");
        const posts = result.rows;
        res.status(200).json(posts);
      } catch (error) {
        console.error("Database query error:", error);
        res.status(500).json({ message: "Internal Server Error" });
      }
    } else {
      res.status(405).json({ message: "Method Not Allowed" });
    }
  };
import express, { Application } from "express";
import cors from "cors";

import { router } from "./routes/todo";
import { connectDb } from "./config/db";

const app: Application = express();

const PORT: string | number = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// * Routes
app.use(router);

// * Connect Database
connectDb();

// ? Log Message
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);

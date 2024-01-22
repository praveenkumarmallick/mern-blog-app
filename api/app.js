import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

// Database Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Database Connected Successfully...");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});

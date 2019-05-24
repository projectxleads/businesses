// Import packages
import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime as if it were and environment variable
const port = process.env.SERVER_PORT;
const dbConnectionString = process.env.MONGODB_CONNECTION_STRING as string;

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

mongoose.connect(dbConnectionString)
  .then((result) => {
    console.log("Connected to db");
    app.listen(port, () => {
      console.log(`Server started at http://localhost:${port}`);
    });
  });

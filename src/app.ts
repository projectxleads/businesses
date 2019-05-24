import dotenv from "dotenv";
import express from "express";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime as if it were and environment variable
const port = process.env.SERVER_PORT;

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello world`);
});

app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`Server started at http://localhost:${port}`);
});

import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import tasksRouter from "./routes/tasks.js";
const PORT = 3000;

const connectionString = process.env.MONGO_DB_CONNECTION;
console.log(connectionString);
// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

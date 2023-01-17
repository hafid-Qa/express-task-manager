import connectDB from "./db/connect.js";
import express from "express";
const app = express();
import tasksRouter from "./routes/tasks.js";
const PORT = 3000;

// middleware
app.use(express.json());

// routes
app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use("/api/v1/tasks", tasksRouter);

const start = async () => {
  try {
    connectDB();
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

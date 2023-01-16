import express from "express";
const app = express();
import tasksRouter from "./routes/tasks.js";
const PORT = 3000;

app.get("/hello", (req, res) => {
  res.send("Task manager App");
});

app.use("api/v1/tasks", tasksRouter);

app.listen(PORT, console.log(`Listening on port ${PORT}...`));

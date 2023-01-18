import express from "express";
const app = express();
import * as dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connect.js";
import tasksRouter from "./routes/tasks.js";
import notFound from "./middleware/not-found.js";
import errorHandler from "./middleware/error-handler.js";

const PORT = process.env.PORT || 3000;
const connectionString = process.env.MONGO_URI;

// middleware
app.use(express.static("./public"));
app.use(express.json());
// routes
app.use("/api/v1/tasks", tasksRouter);
// error handlers for wrong routes
app.use(notFound);
// error handler for server errors
app.use(errorHandler);

const start = async () => {
  try {
    await connectDB(connectionString);
    app.listen(PORT, console.log(`Listening on port ${PORT}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

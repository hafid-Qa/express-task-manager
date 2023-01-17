import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGO_DB_CONNECTION;
console.log(connectionString);

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

export default connectDB;

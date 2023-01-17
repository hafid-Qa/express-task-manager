import mongoose from "mongoose";
import * as dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.MONGO_DB_CONNECTION;
console.log(connectionString);

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected to the DB..."))
  .catch((err) => console.log(err));

export default mongoose;

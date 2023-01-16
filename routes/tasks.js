import express from "express";
const router = express.Router();
import { getAllTasks } from "../controllers/tasks.js";

router.route("/").get(getAllTasks);

export default router;

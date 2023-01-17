import Task from "../models/task.js";
import asyncWrapper from "../middleware/async.js";

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
  // res.status(200).json({ success: true, tasks, count: tasks.length });
  // res
  //   .status(200)
  //   .json({ status: "success", data: { tasks, nbHits: tasks.length } });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `Task with id: ${taskID} Not Found ` });
  }

  res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const data = req.body;
  const task = await Task.findOneAndUpdate({ _id: taskID }, data, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return res.status(404).json({ msg: `Task with id: ${taskID} Not Found` });
  }
  res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return res.status(404).json({ msg: `Task with id: ${taskID} Not Found` });
  }
  res.status(200).json({ task });
  // res.status(200).send();
  // res.status(200).json({ task: null, status: "success" });
});

export { getAllTasks, createTask, getTask, updateTask, deleteTask };

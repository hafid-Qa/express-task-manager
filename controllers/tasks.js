import Task from "../models/task.js";

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg:error})
  }
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};
const deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };

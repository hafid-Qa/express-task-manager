import Task from "../models/task.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
      return res
        .status(404)
        .json({ msg: `Task with id: ${taskID} Not Found ` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const updateTask = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `Task with id: ${taskID} Not Found` });
    }
    res.status(200).json({ task });
    // res.status(200).send();
    // res.status(200).json({ task: null, status: "success" });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export { getAllTasks, createTask, getTask, updateTask, deleteTask };

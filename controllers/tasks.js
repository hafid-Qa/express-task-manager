const getAllTasks = (req, res) => {
  res.send("get all tasks");
};
const createTask = (req, res) => {
  res.json(req.body);
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

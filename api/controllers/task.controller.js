const Task = require("../models/task.models");


const getTask = async (req, res) => {
  try {
    const allTask = await Task.find();
    return res.status(200).json(allTask);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const allTask = await Task.findById(id);
    return res.status(200).json(allTask);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const createdTask = await newTask.save();
    return res.status(200).json(createdTask);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyTask = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyTask = new Task(req.body);
    modifyTask._id = id;
    const putTask = await Task.findByIdAndUpdate(id, modifyTask, {
      new: true,
    });
    if (!putTask) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.status(200).json(putTask);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteTask = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteTask = await Task.findByIdAndDelete(id);
      if (!deleteTask) {
        return res.status(404).json({ message: "Task no encontrados" }); // 
      }
      return res.status(200).json({ message: "Task eliminados con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getTask,
  getTaskById,
  createTask,
  modifyTask,
  deleteTask,
};
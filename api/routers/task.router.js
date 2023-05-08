const express = require("express");

const router = express.Router();

const {
    getTask,
    getTaskById,
    createTask,
    modifyTask,
    deleteTask
} = require("../controllers/task.controller");

router.get("/:id", getTaskById);
router.get("/", getTask);
router.post("/", async (req, res) => {
    try {
      const { title } = req.body;
      const task = await task.create({ title, completed: false });
      res.status(201).json({ task });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

router.put("/:id", modifyTask);
router.delete("/:id", deleteTask);

module.exports = router;
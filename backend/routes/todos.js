const express = require("express");
const router = express.Router();

const ToDoController = require("../controllers/todo");

router.get("/", async (req, res) => ToDoController.getTasks);
router.post("/", async (req, res) => ToDoController.createTask);
router.patch("/complete/:id", async (req, res) => ToDoController.updateTask);
router.delete("/:id", async (req, res) => ToDoController.deleteTasks);

module.exports = router;
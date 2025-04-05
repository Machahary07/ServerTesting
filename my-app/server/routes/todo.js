const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");

// GET all todos
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

// POST new todo
router.post("/", async (req, res) => {
  const newTodo = new Todo({ title: req.body.title });
  const saved = await newTodo.save();
  res.json(saved);
});

// PUT update todo
router.put("/:id", async (req, res) => {
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { isDone: req.body.isDone },
    { new: true }
  );
  res.json(updated);
});

// DELETE todo
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router;
// Compare this snippet from my-app/server/server.js:
// const express = require("express");
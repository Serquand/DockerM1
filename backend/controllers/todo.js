const Todo = require("../models/todo");

const createTask = async (req, res) => {
    console.log(req.body);

    const todo = new Todo({
        title: req.body.title,
        description: req.body.description,
        is_complete: req.body.is_complete || false,
        due_date: req.body.due_date || new Date(),
    });
    
    await todo.save();
    res.send(todo);
}

const updateTask = async (req, res) => {
    console.log(req.body);
  
    try {
        const todo = await Todo.findOne({ _id: req.params.id });

        if (req.body.is_complete != undefined && req.body.is_complete != null ) {
            todo.is_complete = req.body.is_complete;
        }

        await todo.save();
        res.send(todo);
    } catch {
        res.status(404);
        res.send({ error: "Todo does not exist!" });
    }
}

const getTasks = async (req, res) => {
    const todos = await Todo.find({ is_complete: false });

    res.send(todos);
}

const deleteTasks = async (req, res) => {
    try {
        await Todo.deleteOne({ _id: req.params.id });
        res.status(204).send();
    } catch {
        res.status(404);
        res.send({ error: "Todo does not exist!" });
    }
}

module.exports = { createTask, updateTask, getTasks, deleteTasks };
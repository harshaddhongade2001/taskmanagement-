"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletetask = exports.updatetask = exports.createNewtask = exports.specifictask = exports.gettask = void 0;
const db_config_1 = require("../config/db.config");
const gettask = (req, res) => {
    res.status(200).json(db_config_1.tasks);
};
exports.gettask = gettask;
const specifictask = (req, res) => {
    const task = db_config_1.tasks.find(t => t.id === parseInt(req.params.id));
    if (!task) {
        return res.status(404).send("task is not found");
    }
    res.status(200).json(task);
};
exports.specifictask = specifictask;
const createNewtask = (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).send('title and discription is require');
    }
    const task = {
        id: db_config_1.tasks.length + 1,
        title,
        description
    };
    db_config_1.tasks.push(task);
    res.status(201).json(task);
};
exports.createNewtask = createNewtask;
const updatetask = (req, res) => {
    const task = db_config_1.tasks.find(t => t.id === parseInt(req.params.id));
    const { title, description } = req.body;
    if (!task) {
        return res.status(404).send('Task not found');
    }
    if (!title || !description) {
        return res.status(400).send('Title and description are required');
    }
    task.title = title;
    task.description = description;
    res.status(200).json(task);
};
exports.updatetask = updatetask;
const deletetask = (req, res) => {
    const taskIndex = db_config_1.tasks.findIndex(t => t.id === parseInt(req.params.id));
    if (taskIndex === -1) {
        return res.status(404).send('Task not found');
    }
    db_config_1.tasks.splice(taskIndex, 1);
    res.status(204).send();
};
exports.deletetask = deletetask;

const mongoose = require("mongoose")

const Schema = mongoose.Schema

const taskSchema = new Schema (
    {
        title: {type: String, required: true },
        description: {type: String, required: false },
        relevant: {type: String, required: false },
       
    }
)

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
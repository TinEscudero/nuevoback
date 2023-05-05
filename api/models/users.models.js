const mongoose = require("mongoose")

const Schema = mongoose.Schema

const usersSchema = new Schema (
    {
        name: {type: String, required: true },
        surname: {type: Number, required: true },
        phone: {type: Number, required: true },
        image: {type: String, required: false },
    }
)

const Users = mongoose.model("users", usersSchema);

module.exports = Users;
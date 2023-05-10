const mongoose = require("mongoose");

const users_model = mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, },
    email: { type: String, required: true },
    password: { type: String, required: true },
    createdOn: { type: String, default: Date.now() }
});

module.exports = mongoose.model("users", users_model);
const mongoose = require("mongoose");

const AppSchema = mongoose.Schema({
    email: String,
    pass: String,
    role: String
});
module.exports = mongoose.model("App", AppSchema);
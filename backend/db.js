const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.URL);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("cohort", todoSchema);

module.exports = {
  todo,
};

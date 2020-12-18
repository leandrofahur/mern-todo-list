const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  status: {
    type: Boolean,
    default: false,
  },
});

module.exports = Task = mongoose.model("task", TaskSchema);

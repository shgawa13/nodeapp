const mongoose = require("mongoose");

// here is the schema and the type  of data
const schema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
});
module.exports = mongoose.model("Task", schema);

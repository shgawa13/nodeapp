const Task = require("../models/task");

module.exports = {
  // view tasks
  index: (req, res) => {
    Task.find({}, (error, tasks) => {
      error
        ? console.log(`there is an error ${error}`)
        : res.render("todo.ejs", { todotasks: tasks });
    });
  },
  // cteate new task
  create: (req, res) => {
    const tsetTask = new Task({ title: req.body.title });
    tsetTask.save().then(() => res.redirect("/"));
  },
  // edit the task
  edit: (req, res) => {
    const id = req.params.id;
    Task.find({}, (err, tasks) => {
      res.render("todoEdit.ejs", { todotasks: tasks, idTask: id });
    });
  },
  // update the task
  update: (req, res) => {
    const id = req.params.id;
    Task.findByIdAndUpdate(id, { title: req.body.title }, (err) => {
      err ? res.send(500, err) : res.redirect("/");
    });
  },
  // deleting the task
  delete: (req, res) => {
    Task.deleteOne({ _id: req.params.id }, (error) => {
      error ? console.log(`there is an error ${error}`) : res.redirect("/");
    });
  },
};

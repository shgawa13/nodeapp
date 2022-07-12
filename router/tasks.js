const router = require("express").Router();
const TaskController = require("../controllers/task");

// route the tasks
// show  tasks
router.get("/", TaskController.index);
// create new task
router.post("/create", TaskController.create);
// edit and update task
router.get("/update/:id", TaskController.edit);
router.put("/update/:id", TaskController.update);
// deleting task
router.delete("/delete/:id", TaskController.delete);

module.exports = router;

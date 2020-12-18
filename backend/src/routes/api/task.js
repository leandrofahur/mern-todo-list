const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();

const Task = require("../../models/Task");

// @route:    Get api/task/:id
// @desc:     Get task
// @access:   Public
router.get("/:id", async (req, res) => {
  const _id = req.params.id;
  try {
    let task = await Task.findById({ _id });

    if (!task) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Could not find this task" }] });
    }
    res.status(200).send({ task });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ errors: [{ msg: "Server Error" }] });
  }
});

// @route:    Post api/task
// @desc:     Register task
// @access:   Public
router.post(
  "/",
  [check("description", "Description is required").not().isEmpty()],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { description, status } = req.body;
    try {
      let task = await Task.findOne({ description });
      if (task) {
        return res
          .status(400)
          .send({ errors: [{ msg: "Task already exists" }] });
      }
      task = new Task({
        description,
        status,
      });

      await task.save();
      res.status(200).send({ msg: "Task created with success" });
    } catch (error) {
      console.log(error.message);
      res.status(500).send({ errors: [{ msg: "Server Error" }] });
    }
  }
);

module.exports = router;

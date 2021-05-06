// // routes go here
const { Workout } = require("../models");
const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
  db.Workout.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
//   const workout = new Workout(body);

  db.Workout.findByIdAndUpdate(params.id, { $push: {exercises: body} }, { new: true })
    .then((newWorkout) => {
      res.json(newWorkout);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;

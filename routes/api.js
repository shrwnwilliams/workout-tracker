// // routes go here
const db = require("../models");
const router = require("express").Router();

router.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, found) =>{
        if (err) {
            console.log(err)
        } else {
            res.json(found);
        }
    })
})

router.post("/api/workouts/:id", (req, res) => {
    
})

module.exports = router;
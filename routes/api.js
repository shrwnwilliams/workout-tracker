// // routes go here
const db = require("./models")

app.get("/api/workouts", (req, res) => {
    db.Workout.find({}, (err, found) =>{
        if (err) {
            console.log(err)
        } else {
            res.json(found);
        }
    })
})

app.post("/api/workouts/:id", (req, res) => {
    
})
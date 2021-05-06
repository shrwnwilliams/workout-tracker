const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now
  },
  exercise: [
      {
        type: {
            type: String,
            trim: true,
          //   required: "Exercise type is required"
          },
      
          name: {
              type: String,
              trim: true,
              // required: "Exercise name is required"
          },
      
          duration: {
              type: Number,
              // required: "Exercise duration is required"
          },
      
          weight:Number,
      
          distance: Number,
      
          reps: Number,
      
          sets: Number
      }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;

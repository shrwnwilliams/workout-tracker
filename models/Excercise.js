const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
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
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;

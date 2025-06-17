const mongoose = require("mongoose");

const SubjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true }, // added subject name
  grade: { type: String, required: true },
  gradepoint: { type: Number, required: true },
  credit: { type: Number, required: true },
});

const GPASchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    totalGPA: { type: Number, required: true },
    subjects: [SubjectSchema] // Array of subject details
});


const GPA = mongoose.model("GPA", GPASchema);
module.exports = GPA;

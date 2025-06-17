const mongoose = require('mongoose');

const SubjectSchema = new mongoose.Schema({
  subjectName: { type: String, required: true },
  grade: { type: String, required: true },
  gradepoint: { type: Number, required: true },
  credit: { type: Number, required: true },
});

const GPASchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  totalGPA: { type: Number, required: true },
  subjects: [SubjectSchema] // Array of subject details
});

const SemesterSchema = new mongoose.Schema({
  gpa: { type: Number, required: true },
  credits: { type: Number, required: true }
});

const CGPASchema = new mongoose.Schema({
  totalCGPA: { type: Number, required: true },
  semesters: [SemesterSchema]
});


const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gpa: GPASchema, // embedded GPA object
  cgpa: CGPASchema
});

module.exports = mongoose.model('User', UserSchema);

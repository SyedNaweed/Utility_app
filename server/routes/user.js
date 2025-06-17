const express = require('express');
const router = express.Router();
const User = require('../models/User');
const verifyToken = require('../middleware/auth');
const GPA = require('../models/GPA');


// Route: Save GPA data
router.post('/save-gpa', verifyToken, async (req, res) => {
    try {
        console.log("Full Request Body:", req.body);

        const { totalGPA, subjects } = req.body;

        console.log("Extracted Subjects:", subjects);

        const newGPA = new GPA({
           userId: req.userId,
            totalGPA,
            subjects
        });

        const savedGPA = await newGPA.save();
        res.status(201).json(savedGPA);
    } catch (error) {
        console.error("Error saving GPA data:", error);
        res.status(500).json({ message: "Failed to save GPA data", error: error.message });
    }
});
// Save CGPA
// router.post('/save-cgpa', verifyToken, async (req, res) => {
//   const { cgpa } = req.body;

//   try {
//     const user = await User.findById(req.userId);
//     user.cgpa = cgpa;
//     await user.save();
//     res.json({ message: 'CGPA saved successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving CGPA' });
//   }
// });


router.post('/save-cgpa', verifyToken, async (req, res) => {
  try {
    const userId = req.userId;
    const { totalCGPA, semesters } = req.body;

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { cgpa: { totalCGPA, semesters } }, // Save under cgpa field
      { new: true, runValidators: true }
    );

    if (!updatedUser) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'CGPA saved successfully!', user: updatedUser });
  } catch (err) {
    console.error('Error saving CGPA data:', err);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


module.exports = router;

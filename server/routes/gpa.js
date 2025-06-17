// Get GPA data for logged-in user
router.get('/get-gpa', verifyToken, async (req, res) => {
  try {
    const gpa = await GPA.findOne({ userId: req.userId }); // Fetch by userId
    if (!gpa) return res.status(404).json({ message: 'No GPA data found for this user' });
    
    res.status(200).json(gpa);
  } catch (error) {
    console.error('Error fetching GPA:', error);
    res.status(500).json({ message: 'Error fetching GPA data' });
  }
});
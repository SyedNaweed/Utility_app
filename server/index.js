const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();
const GPA = require('./models/GPA');

const verifyToken = require('./middleware/auth'); // Import your auth middleware

const app=express();
const port=process.env.port || 5000;

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']  // VERY IMPORTANT!!
}));
app.use(express.json());

//ippo mongo connection
mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true,
    useUnifiedTopology:true,
}).then(()=>
    console.log("mongodb connected..."))
.catch((err)=>console.error("mongodb failed..",err));

// Import and use auth routes here 👇
const authRoutes = require("./routes/auth");
const userRoutes = require('./routes/user');
app.use("/", authRoutes); // All /api/auth/* routes go to auth.js
app.use('/', userRoutes); // /save-gpa

// Import and use gpa routes here 👇

app.get("/",(req,res)=>{
    res.send("server is running");
});


// app.post('/api/gpa/save', (req, res) => {
//     const { totalGPA, subjects } = req.body;
//     console.log("Received GPA data:", totalGPA, subjects);

//     // Here you can save data to database (MongoDB, etc.)
//     // For now, just send success response:
//     res.json({ message: "GPA data received successfully!" });
// });

app.post('/save-gpa',  verifyToken,async (req, res) => {
    const { totalGPA, subjects } = req.body;
    console.log("Subjects received:", subjects);

    try {

        const newGPA = new GPA({
            totalGPA,
            subjects
        });

        const savedGPA = await newGPA.save();
        console.log("Saved GPA Data to MongoDB:", savedGPA);
        res.json({ message: "GPA data saved to MongoDB!", data: savedGPA });
    } catch (error) {
        console.error("Error saving GPA data:", error);
         res.status(500).json({ message: 'Server error', error: error.message });
    }
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

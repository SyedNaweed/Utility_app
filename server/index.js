const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
require("dotenv").config();

const app=express();
const port=process.env.port || 3000;
app.use(cors());
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
app.use("/", authRoutes); // All /api/auth/* routes go to auth.js

// Import and use gpa routes here 👇

app.get("/",(req,res)=>{
    res.send("server is running");
});

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})

// import React,{useState} from "react";


// const grademap={
//     "O":10,
//     "S":10,
//     "A":9,
//     "B":8,
//     "C":7,
//     "D":6,
//     "E":5,
//     "F":0
// };



// function GPAcalculator(){
//     const [grade,setgrade]=useState("O");
//     const [credit,setcredits]=useState("");//eduku
//     const [subjects,setsubjects]=useState([]);

//     const addsubject=()=>{
//         const gradepoint=grademap[grade];
//         const creditvalue=parseFloat(credit);
//         if(isNaN(credit)|| credit<=0 || creditvalue > 10){
//             alert("please enter a valid credit value");
//             return;
//         }
//         const newsubject={
//             grade:grade,
//             credit:creditvalue,
//             gradepoint:gradepoint
//         };
//         setsubjects([...subjects,newsubject]);
//         setcredits(""); 
//         }
//         const removeSubject = (indexToRemove) => {
//             const updatedSubjects = subjects.filter((_, index) => index !== indexToRemove);//different idu eduku
//             setsubjects(updatedSubjects);
//         };
//         const removeAllsubjects=()=>{
//             setsubjects([]);
//         }

//         const calculateGPA=()=>{
//             const totalcredits=subjects.reduce((sum,sub)=>sum+sub.credit,0);
//             const totalpoints=subjects.reduce((sum,sub)=>sum+sub.gradepoint*sub.credit,0);
//             if(totalcredits===0){
//                 return 0;
                
//             }
//             const cgpa=totalpoints/totalcredits;
//             return cgpa.toFixed(2);
//         }
   
   
//     return(
//         //flex flex-col items-center justify-center px-4 .
//         //bg-white text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg 
//         <div>
    

//     <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 flex flex-col items-left justify-center px-2">
//             <h1 className="text-2xl font-bold mb-4 drop-shadow-md text-center mb-6">GPA Calculator</h1>
//         <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row gap-8">

//             <div className="w-full md:w-1/2 bg-grey-200 p-4 rounded-lg shadow-md"> 
//             <div className="mb-4">
//             <label className="block mb-1 font-medium">
//                 Grade:{" "}
//                 <select value={grade} onChange={(e)=>setgrade(e.target.value)} className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
//                     {
//                         Object.keys(grademap).map((g)=>(  // eduku
//                             <option value={g} key={g}>{g}
//                             </option>
//                         ))
//                     }
//                      </select>
//             </label>
//             </div>
//             <br />
//             <div className="mb-4">
//             <label className="block mb-1 font-medium">
//                 Credits:{" "}
//                 <input type="number" value={credit} onChange={(e)=>setcredits(e.target.value)} onKeyDown={(e) => {
//                     if (e.key === "Enter") {
//                         addsubject();}} } className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"/>
//             </label>
//                 </div>
//             <br />
//             <div className="flex gap-2 mb-6">

//             <button onClick={addsubject} className="bg-green-400 px-4 py-2 rounded shadow hover:bg-green-600 transition">Add Subject</button>
//             <button onClick={removeAllsubjects} className="bg-red-400  px-4 py-2 rounded hover:bg-red-600 transition">Remove All Subjects</button>
//             </div>
//             </div>
//                 <div className="w-full md:w-1/2 bg-grey-200 p-4 rounded-lg shadow-md"> 
//             <h3 className="text-lg font-semibold mb-2">Subject:</h3>
//             <ul className="space-y-2 mb-4">
//                 {subjects.map((sub,index)=>(
//                     <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded shadow">
//                         <span>
//                             <strong>Grade:</strong>  {sub.grade} | <strong>gradepoints:</strong> {sub.gradepoint} | <strong>Credits:</strong>  {sub.credit}
//                         </span>
//                         {" "}
//                         <button onClick={() => removeSubject(index)} className="text-xl font-bold test-center rounded px-3 py-2 hover:bg-red-400 transition ">Remove</button>
//                     </li>
//                 ))}
//             </ul>
//                 </div>
//            {subjects.length > 0 && (
//                <div className="text-center text-xl font-bold mt-4">
//           GPA: {calculateGPA()}
//         </div>
//       )}
//             </div>
//         </div>
//       </div>
//     )};
// export default GPAcalculator;

// GPAcalculator.jsx
import React, { useState, useEffect } from "react";
import axios from "axios"; // You forgot this import

const backendURL = import.meta.env.VITE_BACKEND_URL;

const grademap = {
  "O": 10,
  "S": 10,
  "A": 9,
  "B": 8,
  "C": 7,
  "D": 6,
  "E": 5,
  "F": 0
};

function GPAcalculator() {
  const [subjectName, setSubjectName] = useState("");
  const [grade, setgrade] = useState("O");
  const [credit, setcredits] = useState("");
  const [subjects, setsubjects] = useState([]);
   const [gpaData, setGpaData] = useState(null);

  // const isLoggedIn = localStorage.getItem("token");
  const token = localStorage.getItem("token");
const isLoggedIn = !!token; // CHECK if user is logged in
  useEffect(() => {
    if (!isLoggedIn) return;
    const fetchGPA = async () => {
      try {
        const res = await axios.get(`${backendURL}/get-gpa`, {   //http://localhost:5000/get-gpa
          headers: { Authorization: `Bearer ${token}` }
        });
        console.log("Fetched GPA data:", res.data);
        setGpaData(res.data);
      } catch (error) {
        console.error('Error fetching GPA:', error);
      }
    };

    fetchGPA();
  }, [isLoggedIn, token]);

  const addsubject = () => {
    const gradepoint = grademap[grade];
    const creditvalue = parseFloat(credit);
    if (isNaN(credit) || credit <= 0 || creditvalue > 10) {
      alert("Please enter a valid credit value");
      return;
    }
    const newsubject = {
      subjectName: subjectName,
      grade: grade,
      credit: creditvalue,
      gradepoint: gradepoint
    };
    setsubjects([...subjects, newsubject]);
    setcredits("");
    setSubjectName(""); 
  };

  const removeSubject = (indexToRemove) => {
    const updatedSubjects = subjects.filter((_, index) => index !== indexToRemove);
    setsubjects(updatedSubjects);
  };

  const removeAllsubjects = () => {
    setsubjects([]);
  };

  const calculateGPA = () => {
    const totalcredits = subjects.reduce((sum, sub) => sum + sub.credit, 0);
    const totalpoints = subjects.reduce((sum, sub) => sum + sub.gradepoint * sub.credit, 0);
    if (totalcredits === 0) {
      return 0;
    }
    const gpa = totalpoints / totalcredits;
    return gpa.toFixed(2);
  };

  const saveGPA = async () => {
    const token = localStorage.getItem("token"); // assuming token is stored here
    const totalGPA = calculateGPA();

    const payload = {
  totalGPA: totalGPA,
  subjects: subjects.map(sub => ({
      subjectName: sub.subjectName, // Fix here
    grade: sub.grade,
    credit: sub.credit,
    gradepoint: sub.gradepoint
  }))
};
 console.log("subjectName",    subjectName );
    console.log("Token being sent:", localStorage.getItem('token'));
    console.log("Payload being sent:", payload);
    console.log("Payload subjects array:", payload.subjects);

    try {
      const response = await axios.post('http://localhost:5000/save-gpa', payload, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Send token if required
        }
      });
      alert("GPA Saved Successfully: " + response.data.message);
    } catch (error) {
      console.error("Error saving GPA:", error);
      alert("Failed to save GPA. Check the console.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 flex flex-col items-center justify-center px-4">
      <h1 className="text-2xl font-bold mb-6 drop-shadow-md text-center">GPA Calculator</h1>
      <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row gap-8 w-full max-w-4xl">

      <div className="w-full md:w-1/2 p-4 rounded-lg shadow-md">
          <div className="mb-4"></div>
          <label className="block mb-1 font-medium">Name:{" "}
        <input
          type="text"
          placeholder="Subject Name"
          value={subjectName}
          onChange={(e) => setSubjectName(e.target.value)}
          className="p-2 border rounded"
        />
        </label>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Grade:{" "}
              <select value={grade} onChange={(e) => setgrade(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400">
                {Object.keys(grademap).map((g) => (<option value={g} key={g}>{g}</option>))}
              </select>
            </label>
          </div>

          <div className="mb-4">
            <label className="block mb-1 font-medium">Credits:{" "}
              <input type="number" value={credit} onChange={(e) => setcredits(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") addsubject(); }}
                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
            </label>
          </div>

          <div className="flex gap-2 mb-6">
            <button onClick={addsubject}
              className="bg-green-400 px-4 py-2 rounded shadow hover:bg-green-600 transition">Add Subject</button>
            <button onClick={removeAllsubjects}
              className="bg-red-400 px-4 py-2 rounded hover:bg-red-600 transition">Remove All Subjects</button>
          </div>
        </div>

        <div className="w-full md:w-1/2 p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Subjects:</h3>
          <ul className="space-y-2 mb-4">
            {subjects.map((sub, index) => (
              <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded shadow">
                <span><strong>Grade:</strong> {sub.grade} | <strong>Gradepoints:</strong> {sub.gradepoint} | <strong>Credits:</strong> {sub.credit}</span>
                <button onClick={() => removeSubject(index)}
                  className="text-xl font-bold text-center rounded px-3 py-2 hover:bg-red-400 transition">Remove</button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {subjects.length > 0 && (
        <div className="text-center text-xl font-bold mt-4 text-white">
          GPA: {calculateGPA()}
        </div>
      )}

      {/* SAVE GPA BUTTON - only shown when logged in */}
      {isLoggedIn && subjects.length > 0 && (
        <button
          onClick={saveGPA}
          className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
        >
          Save GPA
        </button>
      )}
    </div>
  );
}

export default GPAcalculator;


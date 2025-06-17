// import {useState} from "react";


// function CGPAfromsemesters(){
//     const [gpa,setgpa]=useState("");
//     const [credits,setcredits]=useState("");
//     const [semesters,setsemesters]=useState([]);

//     const addsemester=()=>{
//         const gpavalue=parseFloat(gpa);
//         const creditvalue=parseFloat(credits);
//         if(isNaN(gpavalue)|| isNaN(creditvalue) || gpavalue<0|| creditvalue<=0 || gpavalue > 10 || creditvalue > 30)
//         {
//             alert("please enter a valid gpa and credits value");
//             return;
//         }
//         const newsemester={
//             gpa:gpavalue,
//             credits:creditvalue
//         };
//             setsemesters([...semesters,newsemester]);
//             setgpa("");
//             setcredits("");
            
//         };
//         const calculateCGPA=()=>{
//             const totalcredits=semesters.reduce((sum,sem)=>sum+sem.credits,0);
//             const totalgpa=semesters.reduce((sum,sem)=>sum+sem.gpa*sem.credits,0);
//             if(totalcredits===0)
//             {
//                 alert("please add atleast one semester");
//                 return 0;
//             }
//            return (totalgpa/totalcredits).toFixed(2);
//     };
//     const removesemester=(index)=>{
//         const semupdate=semesters.filter((_,i)=>i!==index);
//         setsemesters(semupdate);
//     };
//     const removeAllsem=()=>{
//         setsemesters([]);
//     };
//     return (
//       <div>
      
//   <div className="min-h-screen bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600 flex flex-col items-left justify-center px-2">
//       <h1 className="text-2xl font-bold mb-4 drop-shadow-md  text-center mb-6">
//         CGPA Calculator
//       </h1>
//     {/* <div className="bg-white rounded-xl shadow-xl p-6 max-w-md w-full space-y-5"> */}
//         <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row gap-8">

//             <div className="w-full md:w-1/2 bg-grey-200 p-4 rounded-lg shadow-md"> 
//         <div className="mb-4">

//         <label className="block mb-1 font-medium">
//             GPA:{" "}
//         <input
//           type="number" value={gpa} step="0.01" onChange={(e) => setgpa(e.target.value)}
//           className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"/>
//       </label>
//         </div>
//         <br />
//         <div className="mb-4">
//       <label className="block mb-1 font-medium">
//         Credits:{" "}
//         <input
//           type="number" value={credits} onChange={(e) => setcredits(e.target.value)} onKeyDown={(e) => {
//             if (e.key === "Enter") {
//               addsemester();
//             }
//           }}
//           className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400 outline-none"/>

//       </label>
//           </div>
//           <br />
//       <div className="flex gap-2 mt-6">
//         <button
//           onClick={addsemester}
//           className="bg-green-400  px-4 py-2 rounded-md hover:bg-green-600 transition">
//           Add Semester
//         </button>
//         <button
//           onClick={removeAllsem}
//           className="bg-red-400 px-4 py-2 rounded-md hover:bg-red-600 transition"
//           >
//           Remove All Semesters
//         </button>
//       </div>
//     </div>

//     <div className="w-full md:w-1/2 bg-grey-200 p-4 rounded-lg shadow-md">
//         <h3 className="text-lg font-semibold mb-2">
//           Semesters:
//         </h3>
//         <ul className="space-y-2 mb-4">
//           {semesters.map((sem, index) => (
//             <li
//             key={index}
//             className="flex justify-between items-center bg-gray-100 p-3 rounded shadow"
//             >
//               <span>
//                <strong> GPA:</strong> {sem.gpa}  |  <strong>Credits:</strong> {sem.credits}
//               </span>
//               <button
//                 onClick={() => removesemester(index)}
//                 className="text-xl font-bold test-center rounded px-3 py-2 hover:bg-red-400 transition"
//                 >
//                 Remove
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       {semesters.length > 0 && (
//         <div className="text-center text-xl font-bold mt-4">
//           CGPA: {calculateCGPA()}
//         </div>
//       )}
//     </div>
//   </div>
//       </div>
//     );
// }
// export default CGPAfromsemesters;

import { useState } from "react";
import axios from "axios";
import Nav from "./Nav";

function CGPAfromsemesters() {
  const [gpa, setgpa] = useState("");
  const [credits, setcredits] = useState("");
  const [semesters, setsemesters] = useState([]);
  const [cgpa, setcgpa] = useState(null);

  const addsemester = () => {
    const gpavalue = parseFloat(gpa);
    const creditvalue = parseFloat(credits);
    if (isNaN(gpavalue) || isNaN(creditvalue) || gpavalue < 0 || creditvalue <= 0 || gpavalue > 10 || creditvalue > 30) {
      alert("Please enter a valid GPA and credits value");
      return;
    }
    const newsemester = { gpa: gpavalue, credits: creditvalue };
    setsemesters([...semesters, newsemester]);
    setgpa("");
    setcredits("");
  };

  const calculateCGPA = () => {
    const totalcredits = semesters.reduce((sum, sem) => sum + sem.credits, 0);
    const totalgpa = semesters.reduce((sum, sem) => sum + sem.gpa * sem.credits, 0);
    if (totalcredits === 0) {
      alert("Please add at least one semester");
      return 0;
    }
    const result = (totalgpa / totalcredits).toFixed(2);
    // setcgpa(result);
    return result;
  };

  const removesemester = (index) => {
    const semupdate = semesters.filter((_, i) => i !== index);
    setsemesters(semupdate);
  };

  const removeAllsem = () => {
    setsemesters([]);
    setcgpa(null);
  };

  const saveCGPA = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to save CGPA");
      return;
    }

    const totalCGPA = calculateCGPA();
    const payload = {
      totalCGPA: parseFloat(totalCGPA), // ensure number
      semesters: semesters.map(sem => ({
        gpa: parseFloat(sem.gpa),
        credits: parseFloat(sem.credits)
      }))
    };
    console.log("Saving CGPA with payload:", payload);
    console.log("Token used in request:", token);



    try {
      const res = await axios.post('http://localhost:5000/save-cgpa', payload, {
        headers: { Authorization: `Bearer ${token}`,'Content-Type': 'application/json' }
      });
      console.log("CGPA Saved Successfully:", res.data);
      alert("CGPA Saved Successfully!");
    } catch (error) {
      console.error("Error saving CGPA:", error);
      alert("Error saving CGPA"+ (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      {/* <Nav /> */}
      <div className="min-h-screen bg-gradient-to-br from-fuchsia-500 via-purple-500 to-indigo-600 flex flex-col items-center justify-center px-2">
        <h1 className="text-2xl font-bold mb-4 text-white drop-shadow-md text-center">CGPA Calculator</h1>

        <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row gap-8 w-full max-w-4xl">
          {/* Input Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
            <label className="block mb-1 font-medium">
              GPA:
              <input
                type="number"
                value={gpa}
                step="0.01"
                onChange={(e) => setgpa(e.target.value)}
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
              />
            </label>
            <label className="block mb-4 mt-4 font-medium">
              Credits:
              <input
                type="number"
                value={credits}
                onChange={(e) => setcredits(e.target.value)}
                onKeyDown={(e) => { if (e.key === "Enter") addsemester(); }}
                className="w-full mt-1 px-4 py-2 border rounded-md shadow-sm focus:ring-2 focus:ring-indigo-400"
              />
            </label>

            <div className="flex gap-2 mt-6">
              <button onClick={addsemester} className="bg-green-400 px-4 py-2 rounded-md hover:bg-green-600 transition">Add Semester</button>
              <button onClick={removeAllsem} className="bg-red-400 px-4 py-2 rounded-md hover:bg-red-600 transition">Remove All</button>
            </div>
          </div>

          {/* Semester List Section */}
          <div className="w-full md:w-1/2 bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-2">Semesters:</h3>
            <ul className="space-y-2 mb-4">
              {semesters.map((sem, index) => (
                <li key={index} className="flex justify-between items-center bg-gray-200 p-3 rounded shadow">
                  <span><strong>GPA:</strong> {sem.gpa} | <strong>Credits:</strong> {sem.credits}</span>
                  <button onClick={() => removesemester(index)} className="text-xl font-bold rounded px-3 py-2 hover:bg-red-400 transition">Remove</button>
                </li>
              ))}
            </ul>
            {semesters.length > 0 && (
              <div className="text-center text-xl font-bold mt-4">
                CGPA: {calculateCGPA()}
              </div>
            )}
          </div>
        </div>

        {semesters.length > 0 && (
          <button
            onClick={saveCGPA}
            className="mt-6 bg-blue-500 px-6 py-3 rounded-md text-white hover:bg-blue-700 transition"
          >
            Save CGPA
          </button>
        )}
      </div>
    </div>
  );
}

export default CGPAfromsemesters;

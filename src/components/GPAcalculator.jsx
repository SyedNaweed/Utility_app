import React,{useState} from "react";

const grademap={
    "O":10,
    "S":10,
    "A":9,
    "B":8,
    "C":7,
    "D":6,
    "E":5,
    "F":0
};



function GPAcalculator(){
    const [grade,setgrade]=useState("O");
    const [credit,setcredits]=useState("");//eduku
    const [subjects,setsubjects]=useState([]);

    const addsubject=()=>{
        const gradepoint=grademap[grade];
        const creditvalue=parseFloat(credit);
        if(isNaN(credit)|| credit<=0){
            alert("please enter a valid credit value");
            return;
        }
        const newsubject={
            grade:grade,
            credit:creditvalue,
            gradepoint:gradepoint
        };
        setsubjects([...subjects,newsubject]);
        setcredits(""); 
        }
        const removeSubject = (indexToRemove) => {
            const updatedSubjects = subjects.filter((_, index) => index !== indexToRemove);//different idu eduku
            setsubjects(updatedSubjects);
        };
        const removeAllsubjects=()=>{
            setsubjects([]);
        }

        const calculateGPA=()=>{
            const totalcredits=subjects.reduce((sum,sub)=>sum+sub.credit,0);
            const totalpoints=subjects.reduce((sum,sub)=>sum+sub.gradepoint*sub.credit,0);
            if(totalcredits===0){
                return 0;
            }
            const cgpa=totalpoints/totalcredits;
            return cgpa.toFixed(2);
        }
   
   
    return(
        //flex flex-col items-center justify-center px-4 .
        //bg-white text-gray-800 rounded-xl shadow-lg p-8 w-full max-w-lg 
    <div className="min-h-screen bg-gradient-to-r from-indigo-600 to-purple-500 flex flex-col items-left justify-center px-2">
            <h1 className="text-2xl font-bold mb-4 text-center mb-6">GPA Calculator</h1>
        <div className="bg-white rounded-lg shadow-xl p-6 flex flex-col md:flex-row gap-8">

            <div className="w-full md:w-1/2 bg-grey-200 p-4 rounded-lg shadow-md"> 
            <div className="mb-4">
            <label className="block mb-1 font-medium">
                Grade:{" "}
                <select value={grade} onChange={(e)=>setgrade(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
                    {
                        Object.keys(grademap).map((g)=>(  // eduku
                            <option value={g} key={g}>{g}
                            </option>
                        ))
                    }
                     </select>
            </label>
            </div>
            <br />
            <div className="mb-4">
            <label className="block mb-1 font-medium">
                Credit:{" "}
                <input type="number" value={credit} onChange={(e)=>setcredits(e.target.value)} onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addsubject();}} } className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </label>
                </div>
            <br />
            <div className="flex gap-2 mb-6">

            <button onClick={addsubject} className="bg-green-300 px-4 py-2 rounded shadow hover:bg-green-500 transition">Add Subject</button>
            </div>
            <button onClick={removeAllsubjects} className="bg-red-300 text-white px-4 py-2 rounded hover:bg-red-500 transition">Remove All Subjects</button>
            </div>
                <div className="w-full md:w-1/2 bg-grey-200 p-4 rounded-lg shadow-md"> 
            <h3 className="text-lg font-semibold mb-2">Subject:</h3>
            <ul className="space-y-2 mb-4">
                {subjects.map((sub,index)=>(
                    <li key={index} className="flex justify-between items-center bg-gray-100 p-3 rounded shadow">
                        <span>
                            <strong>Grade:</strong>  {sub.grade} | <strong>gradepoints:</strong> {sub.gradepoint} | <strong>Credits:</strong>  {sub.credit}
                        </span>
                        {" "}
                        <button onClick={() => removeSubject(index)} className="text-xl font-bold test-center rounded px-3 py-2 hover:bg-red-400 transition ">Remove</button>
                    </li>
                ))}
            </ul>
            <h3 className="text-xl font-bold">
               <span className=""> GPA: {calculateGPA()}</span></h3>
                </div>
            </div>
        </div>
    )};
export default GPAcalculator;
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
        <div>
            <h1>GPA Calculator</h1>
            <label>
                Grade:{" "}
                <select value={grade} onChange={(e)=>setgrade(e.target.value)}>
                    {
                        Object.keys(grademap).map((g)=>(  // eduku
                            <option value={g} key={g}>{g}
                            </option>
                        ))
                    }
                     </select>
            </label>
            <br />
            <label >
                Credit={" "}
                <input type="number" value={credit} onChange={(e)=>setcredits(e.target.value)} onKeyDown={(e) => {
    if (e.key === "Enter") {
      addsubject();}}}/>
            </label>
            <br />
            <button onClick={addsubject}>Add Subject</button>
            <button onClick={removeAllsubjects}>Remove All Subjects</button>
            <h3>Subject:</h3>
            <ul>
                {subjects.map((sub,index)=>(
                    <li key={index}>
                        Grade: {sub.grade} gradepoints: {sub.gradepoint} Credits: {sub.credit}
                        {" "}
                        <button onClick={() => removeSubject(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>GPA: {calculateGPA()}</h3>
        </div>
    )};
export default GPAcalculator;
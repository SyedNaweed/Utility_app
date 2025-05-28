import React from "react";
import {useState} from "react";

function CGPAfromsemesters(){
    const [gpa,setgpa]=useState("");
    const [credits,setcredits]=useState("");
    const [semesters,setsemesters]=useState([]);

    const addsemester=()=>{
        const gpavalue=parseFloat(gpa);
        const creditvalue=parseFloat(credits);
        if(isNaN(gpavalue)|| isNaN(creditvalue) || gpavalue<0|| creditvalue<=0)
        {
            alert("please enter a valid gpa and credits value");
            return;
        }
        const newsemester={
            gpa:gpavalue,
            credits:creditvalue
        };
            setsemesters([...semesters,newsemester]);
            setgpa("");
            setcredits("");
            
        };
        const calculateCGPA=()=>{
            const totalcredits=semesters.reduce((sum,sem)=>sum+sem.credits,0);
            const totalgpa=semesters.reduce((sum,sem)=>sum+sem.gpa*sem.credits,0);
            if(totalcredits===0)
            {
                alert("please add atleast one semester");
                return 0;
            }
           return (totalgpa/totalcredits).toFixed(2);
    };
    const removesemester=(index)=>{
        const semupdate=semesters.filter((_,i)=>i!==index);
        setsemesters(semupdate);
    };
    const removeAllsem=()=>{
        setsemesters([]);
    };
    return(
        <div>
            <h1>
                CGPA from semesters
            </h1>
            <label>
            GPA:{" "}
            <input type="number" value={gpa} step="0.01" onChange={(e)=>setgpa(e.target.value)} />
            </label>
            <br />
            <label>
            Credits:{" "}
                <input type="number" value={credits} onChange={(e)=>{setcredits(e.target.value)}} />

            </label>
            <br />
            <button onClick={addsemester}>Add Semester</button>
            <button onClick={removeAllsem}>Remove All Semesters</button>

            <h3>Semesters</h3>
            <ul>
                {semesters.map((sem,index)=>(
                    <li key={index}>
                        GPA: {sem.gpa}, Credits: {sem.credits}{" "}
                        <button onClick={()=>removesemester(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            {semesters.length>0&&(
                <h3>CGPA: {calculateCGPA()}</h3>
            )}
        </div>
    );
}
export default CGPAfromsemesters;


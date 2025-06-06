import React, { useState } from "react";

function CGPAfromsemesters() {
    const [gpa, setgpa] = useState("");
    const [credits, setcredits] = useState("");
    const [semesters, setsemesters] = useState([]);

    const addsemester = () => {
        const gpavalue = parseFloat(gpa);
        const creditvalue = parseFloat(credits);
        if (isNaN(gpavalue) || isNaN(creditvalue) || gpavalue < 0 || creditvalue <= 0) {
            alert("please enter a valid gpa and credits value");
            return;
        }
        const newsemester = {
            gpa: gpavalue,
            credits: creditvalue
        };
        setsemesters([...semesters, newsemester]);
        setgpa("");
        setcredits("");
    };

    const removeSemester = (indexToRemove) => {
        const updatedSemesters = semesters.filter((_, index) => index !== indexToRemove);
        setsemesters(updatedSemesters);
    };

    const removeAllSemesters = () => {
        setsemesters([]);
    };

    const calculateCGPA = () => {
        const totalCredits = semesters.reduce((sum, sem) => sum + sem.credits, 0);
        const totalPoints = semesters.reduce((sum, sem) => sum + sem.gpa * sem.credits, 0);
        if (totalCredits === 0) {
            return 0;
        }
        const cgpa = totalPoints / totalCredits;
        return cgpa.toFixed(2);
    };

    return (
        <div>
            <h2>CGPA Calculator (Semester-wise)</h2>
            <label>
                Semester GPA:{" "}
                <input
                    type="number"
                    value={gpa}
                    onChange={(e) => setgpa(e.target.value)}
                    step="0.01"
                    min="0"
                    max="10"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addsemester();
                        }
                    }}
                />
            </label>
            <br />
            <label>
                Credits:{" "}
                <input
                    type="number"
                    value={credits}
                    onChange={(e) => setcredits(e.target.value)}
                    min="1"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addsemester();
                        }
                    }}
                />
            </label>
            <br />
            <button onClick={addsemester}>Add Semester</button>
            <button onClick={removeAllSemesters}>Remove All Semesters</button>
            <h3>Semesters:</h3>
            <ul>
                {semesters.map((sem, index) => (
                    <li key={index}>
                        GPA: {sem.gpa} Credits: {sem.credits}
                        {" "}
                        <button onClick={() => removeSemester(index)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h3>CGPA: {calculateCGPA()}</h3>
        </div>
    );
}

export default CGPAfromsemesters;

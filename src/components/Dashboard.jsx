// import { Link } from "react-router-dom";
// import React from "react";

// function Dashboard(){
//     return(
//         <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-black flex flex-col items-center justify-center px-4">
//             <h1 className="text-4xl font-bold mb-4 text-center drop-shadow-lg">
//                 Welcome to the Student Utility Dashboard
//                 </h1>
//             <p className="text-lg text-white/80 text-center mb-10 max-w-md">Select a feature below to get started:</p>
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
//                 <Link to="/cgpa">
//                 <button className="bg-white text-indigo-700 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-all"> 
//                     CGPA Calculator 
//                 </button>
//                 </Link>
//                 <Link to="/gpa">
//                 <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded shadow">
//                     GPA Calculator
//                 </button>
//                     </Link>
//                 <Link to="/currencyconvertor">
//                 <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-6 py-2 rounded shadow">
//                     Currency Convertor
//                 </button>
//                 </Link>
//             </div>
//         </div>
//     );
// }
// export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    // Background gradient for the whole page
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white flex flex-col items-center justify-center px-4">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-4 text-center drop-shadow-lg">
        Welcome to the Student Utility Dashboard
      </h1>

      {/* Subtitle */}
      <p className="text-lg text-white/80 text-center mb-10 max-w-md">
        Select a feature below to get started. More tools will be added soon!
      </p>

      {/* Button Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-md">
        {/* Each Link is styled like a card */}
        <Link to="/cgpa">
          <div className="bg-white text-indigo-700 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold">CGPA Calculator</h2>
            <p className="text-sm text-gray-600">Semester-based tool</p>
          </div>
        </Link>

        <Link to="/gpa">
          <div className="bg-white text-green-700 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold">GPA Calculator</h2>
            <p className="text-sm text-gray-600">Subject-based calculator</p>
          </div>
        </Link>

        <Link to="/currencyconvertor">
          <div className="bg-white text-purple-700 p-6 rounded-xl shadow-lg text-center hover:scale-105 transition-all">
            <h2 className="text-xl font-semibold">Currency Converter</h2>
            <p className="text-sm text-gray-600">Live exchange rates</p>
          </div>
        </Link>

        {/* Placeholder for more features */}
        <div className="bg-white text-gray-500 p-6 rounded-xl shadow-lg text-center cursor-not-allowed opacity-60">
          <h2 className="text-xl font-semibold">More Features Coming Soon</h2>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

import React from "react";
import { Link } from "react-router-dom";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import GPAcalculator from "./components/GPAcalculator";
import CGPAfromsemesters from "./components/CGPAfromsemesters";
import CurrencyConvertor from "./components/CurrencyConvertor";



function App(){
  return(
    // <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
    //   <GPAcalculator />
    //   <hr/>
    //   <CGPAfromsemesters />
    //   <hr/>
    //   <CurrencyConvertor/>
    // </div>

    <Router>
      {/* <nav className="bg-gray-800 text-white p-4 flex justify-around items-center">
         <Link to="/" className="hover:bg-gray-700 transition">Dashboard</Link> | 
         <Link to="/gpa" className="hover:bg-gray-700 transition">GPA Calculator</Link> | 
         <Link to="/cgpa" className="hover:bg-gray-700 transition">CGPA Calculator</Link> | 
        <Link to="/currencyconvertor" className="hover:bg-gray-700 transition">Currency Converter</Link>
       </nav> */}
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gpa" element={<GPAcalculator />} />
        <Route path="/cgpa" element={<CGPAfromsemesters />} />
        <Route path="/currencyconvertor" element={<CurrencyConvertor />} />
      </Routes>
    </Router>
  );
}
export default App;
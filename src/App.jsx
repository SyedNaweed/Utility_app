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
      <nav>
        <Link to="/">Dashboard</Link> | 
        <Link to="/gpa">GPA Calculator</Link> | 
        <Link to="/cgpa">CGPA Calculator</Link> | 
        <Link to="/currencyconvertor">Currency Converter</Link>
      </nav>
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
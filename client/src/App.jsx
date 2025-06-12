// import React from "react";
// import { Link } from "react-router-dom";
// import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
// import GPAcalculator from "./components/GPAcalculator";
// import CGPAfromsemesters from "./components/CGPAfromsemesters";
// import CurrencyConvertor from "./components/CurrencyConvertor";



// function App(){
//   return(
//     // <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
//     //   <GPAcalculator />
//     //   <hr/>
//     //   <CGPAfromsemesters />
//     //   <hr/>
//     //   <CurrencyConvertor/>
//     // </div>

//     <Router>
//       {/* <nav className="bg-gray-800 text-white p-4 flex justify-around items-center">
//          <Link to="/" className="hover:bg-gray-700 transition">Dashboard</Link> | 
//          <Link to="/gpa" className="hover:bg-gray-700 transition">GPA Calculator</Link> | 
//          <Link to="/cgpa" className="hover:bg-gray-700 transition">CGPA Calculator</Link> | 
//         <Link to="/currencyconvertor" className="hover:bg-gray-700 transition">Currency Converter</Link>
//        </nav> */}
//       <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/gpa" element={<GPAcalculator />} />
//         <Route path="/cgpa" element={<CGPAfromsemesters />} />
//         <Route path="/currencyconvertor" element={<CurrencyConvertor />} />
//       </Routes>
//     </Router>
//   );
// }
// export default App;


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav"; // Import Nav component
import Dashboard from "./components/Dashboard";
import GPAcalculator from "./components/GPAcalculator";
import CGPAfromsemesters from "./components/CGPAfromsemesters";
import CurrencyConvertor from "./components/CurrencyConvertor";
import Login from "./components/Login";
import LoginBenefits from "./components/LoginBenefits";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);

  // Optional: Auto show login after 1 second on first load (remove this if you don't want auto popup)
  useEffect(() => {
    const timer = setTimeout(() => setShowLogin(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleLater = () => {
    setShowLogin(false);
    setShowBenefits(true);
  };

  const handleGoBack = () => {
    setShowBenefits(false);
    setShowLogin(true);
  };

  const handleOk = () => {
    setShowBenefits(false);
  };

  return (
    <Router>
      {/* Nav bar is common to all pages and passes onLoginClick */}
      <Nav onLoginClick={() => setShowLogin(true)} />  

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gpa" element={<GPAcalculator />} />
        <Route path="/cgpa" element={<CGPAfromsemesters />} />
        <Route path="/currencyconvertor" element={<CurrencyConvertor />} />
      </Routes>

      {/* Login Popup */}
      {showLogin && (
        <Login 
          onClose={() => setShowLogin(false)} 
          onLater={handleLater} 
        />
      )}

      {/* Login Benefits Popup */}
      {showBenefits && (
        <LoginBenefits 
          onOk={handleOk} 
          onGoBack={handleGoBack} 
        />
      )}
    </Router>
  );
}

export default App;

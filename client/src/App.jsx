// import React, { useState, useEffect } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Nav from "./components/Nav"; // Import Nav component
// import Dashboard from "./components/Dashboard";
// import GPAcalculator from "./components/GPAcalculator";
// import CGPAfromsemesters from "./components/CGPAfromsemesters";
// import CurrencyConvertor from "./components/CurrencyConvertor";
// import Login from "./components/Login";
// import LoginBenefits from "./components/LoginBenefits";

// function App() {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showBenefits, setShowBenefits] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

// const data = localStorage.getItem("token") ;
// console.log("Data from localStorage:", data);
//   // Optional: Auto show login after 1 second on first load (remove this if you don't want auto popup)
//   useEffect(() => {
//     if(data){
//       // If already logged in, don't show login popup
//       return;
//     }else{
//  const timer = setTimeout(() => setShowLogin(true), 1000);
//     return () => clearTimeout(timer);
//     }
   
//   }, []);

//   const handleLater = () => {
//     setShowLogin(false);
//     setShowBenefits(true);
//   };

//   const handleGoBack = () => {
//     setShowBenefits(false);
//     setShowLogin(true);
//   };

//   const handleOk = () => {
//     setShowBenefits(false);
//   };

//   // const handleLogin = () => setShowLogin(true);

//   const handleLogout = () => {
//   const confirmLogout = window.confirm("Are you sure you want to log out?");
//   if (confirmLogout) {
//     localStorage.removeItem("token"); // Remove token from localStorage
//     console.log("User logged out");
//     setIsLoggedIn(false);
//     setShowLogin(true); // Show login again
//   }
// };


//   return (
//     <Router>
//       {/* Nav bar is common to all pages and passes onLoginClick */}
//      <Nav 
//       onLoginClick={() => setShowLogin(true)} 
//       isLoggedIn={isLoggedIn} 
//       onLogoutClick={handleLogout}
//       />


//       {/* <Routes>
//         <Route path="/" element={<Dashboard />} />
//         <Route path="/gpa" element={<GPAcalculator />} />
//         <Route path="/cgpa" element={<CGPAfromsemesters />} />
//         <Route path="/currencyconvertor" element={<CurrencyConvertor />} />
//       </Routes> */}

//       <Routes>
//     <Route path="/" element={<Dashboard />} />
//     <Route path="/gpa" element={<GPAcalculator isLoggedIn={isLoggedIn} token={localStorage.getItem("token")} />} />
//     <Route path="/cgpa" element={<CGPAfromsemesters isLoggedIn={isLoggedIn} token={localStorage.getItem("token")} />} />
//     <Route path="/currencyconvertor" element={<CurrencyConvertor />} />
//     </Routes>


//       {/* Login Popup */}
//       {showLogin && (
//         <Login 
//         onClose={() => setShowLogin(false)} 
//         onLater={handleLater} 
//         onLogin={() => setIsLoggedIn(true)} // NEW: When user logs in successfully
//         />

//       )}

//       {/* Login Benefits Popup */}
//       {showBenefits && (
//         <LoginBenefits 
//           onOk={handleOk} 
//           onGoBack={handleGoBack} 
//         />
//       )}
      
//     </Router>
//   );
// }

// export default App;


// App.jsx
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Dashboard from "./components/Dashboard";
import GPAcalculator from "./components/GPAcalculator";
import CGPAfromsemesters from "./components/CGPAfromsemesters";
import CurrencyConvertor from "./components/CurrencyConvertor";
import Login from "./components/Login";
import LoginBenefits from "./components/LoginBenefits";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showBenefits, setShowBenefits] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  useEffect(() => {
    if (!isLoggedIn) {
      const timer = setTimeout(() => setShowLogin(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [isLoggedIn]);

  const handleLater = () => {
    setShowLogin(false);
    setShowBenefits(true);
  };

  const handleGoBack = () => {
    setShowBenefits(false);
    setShowLogin(true);
  };

  const handleOk = () => setShowBenefits(false);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("token");
      setIsLoggedIn(false);
      setShowLogin(true);
    }
  };

  return (
    <Router>
      <Nav onLoginClick={() => setShowLogin(true)} isLoggedIn={isLoggedIn} onLogoutClick={handleLogout} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/gpa" element={<GPAcalculator isLoggedIn={isLoggedIn} />} />
        <Route path="/cgpa" element={<CGPAfromsemesters isLoggedIn={isLoggedIn} />} />
        <Route path="/currencyconvertor" element={<CurrencyConvertor />} />
      </Routes>
      {showLogin && (
        <Login onClose={() => setShowLogin(false)} onLater={handleLater} onLogin={() => setIsLoggedIn(true)} />
      )}
      {showBenefits && <LoginBenefits onOk={handleOk} onGoBack={handleGoBack} />}
    </Router>
  );
}

export default App;
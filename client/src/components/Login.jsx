// import React, { useState } from 'react';

// const Login = ({ onLoginSuccess, onSkip }) => {
//   const [showBenefits, setShowBenefits] = useState(false);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLaterClick = () => {
//     setShowBenefits(true);
//   };

//   const handleGoBack = () => {
//     setShowBenefits(false);
//   };

//   const handleOk = () => {
//     onSkip(); // Tells Dashboard: user skips login
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // validate and proceed login (i will handle this later)
//     onLoginSuccess({ email });
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       {!showBenefits ? (
//         <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
//           <h2 className="text-xl font-bold mb-4">Login to Your Account</h2>
//           <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//             <input 
//               type="email" 
//               value={email} 
//               onChange={(e) => setEmail(e.target.value)} 
//               placeholder="Email" 
//               required 
//               className="border p-2 rounded"
//             />
//             <input 
//               type="password" 
//               value={password} 
//               onChange={(e) => setPassword(e.target.value)} 
//               placeholder="Password" 
//               required 
//               className="border p-2 rounded"
//             />
//             <button type="submit" className="bg-blue-500 text-white py-2 rounded">Submit</button>
//           </form>
//           <button 
//             onClick={handleLaterClick} 
//             className="mt-4 text-sm text-gray-600 underline"
//           >
//             Later
//           </button>
//         </div>
//       ) : (
//         <div className="bg-white p-8 rounded-xl shadow-md w-80 text-center">
//           <h2 className="text-xl font-bold mb-4">Why Login?</h2>
//           <p className="text-gray-700 text-sm mb-4">
//             🔹 Track your GPA/CGPA over time.<br/>
//             🔹 Set academic goals.<br/>
//             🔹 Access from any device.<br/>
//             🔹 Save your progress.
//           </p>
//           <div className="flex justify-around">
//             <button 
//               onClick={handleOk} 
//               className="bg-green-500 text-white py-2 px-4 rounded">OK</button>
//             <button 
//               onClick={handleGoBack} 
//               className="bg-yellow-500 text-white py-2 px-4 rounded">Go Back</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Login;



import { useState } from "react";

function Login({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showBenefits, setShowBenefits] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePassword = (password) => {
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please fill in both Email and Password.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and contain at least 1 letter and 1 number.");
      return;
    }

    setError("");
    console.log("Login successful with Email:", email);
    onClose(); // Close the popup
  };

  const handleLaterClick = () => {
    setShowBenefits(true);
  };

  const handleOk = () => {
    onClose(); // Let user proceed without login
  };

  const handleGoBack = () => {
    setShowBenefits(false); // Return to login form
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        {!showBenefits ? (
          <>
            <h2 className="text-center text-lg font-semibold mb-4">Login to Continue</h2>

            {/* Email Field */}
            <input
              type="email"
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password Field */}
            <input
              type="password"
              placeholder="Password"
              className="w-full mb-3 p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            {/* Error message */}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

            {/* Buttons */}
            <div className="flex justify-between">
              <button
                onClick={handleSubmit}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                Submit
              </button>
              <button
                onClick={handleLaterClick} // NOW shows benefits screen
                className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
              >
                Later
              </button>
            </div>
          </>
        ) : (
          <>
            <h2 className="text-center text-lg font-semibold mb-4">Why Login?</h2>
            <p className="text-gray-700 text-sm mb-4 text-left">
              🔹 Track your GPA/CGPA progress.<br/>
              🔹 Set academic goals.<br/>
              🔹 Access your data across devices.<br/>
              🔹 Save your performance history.
            </p>
            <div className="flex justify-between">
              <button
                onClick={handleOk}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                OK
              </button>
              <button
                onClick={handleGoBack}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
              >
                Go Back
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;

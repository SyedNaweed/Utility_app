import React from "react";

function LoginBenefits({ onOk, onGoBack }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 shadow-lg w-80">
        <h2 className="text-xl font-bold mb-4 text-center">Why Login?</h2>
        <ul className="list-disc list-inside mb-4 text-gray-700">
          <li>Track your GPA/CGPA progress</li>
          <li>Set academic goals</li>
          <li>Access your history anytime</li>
        </ul>
        <div className="flex justify-between">
          <button 
            onClick={onOk} 
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            OK
          </button>
          <button 
            onClick={onGoBack} 
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginBenefits;

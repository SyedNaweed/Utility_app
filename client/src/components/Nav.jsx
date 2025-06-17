import { Link } from "react-router-dom";

function Nav({ onLoginClick , isLoggedIn, onLogoutClick }) {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 text-white p-4 flex justify-between items-center shadow-md">
      
      {/* Left side links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-gray-300 transition">Dashboard</Link>
        <Link to="/gpa" className="hover:text-gray-300 transition">GPA Calculator</Link>
        <Link to="/cgpa" className="hover:text-gray-300 transition">CGPA Calculator</Link>
        <Link to="/currencyconvertor" className="hover:text-gray-300 transition">Currency Converter</Link>
      </div>

      {/* Right side Login button */}
      {/* <button onClick={isLoggedIn ? onLogoutClick : onLoginClick}
      className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition">
        {isLoggedIn ? 'Logout' : 'Login'}
      </button> */}
      {isLoggedIn ? (
  <button
    onClick={onLogoutClick}
    className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition"
  >
    Logout
  </button>
) : (
  <button
    onClick={onLoginClick}
    className="bg-white text-purple-700 px-4 py-2 rounded-full hover:bg-purple-100 transition"
  >
    Login
  </button>
)}

    </nav>
  );
}

export default Nav;

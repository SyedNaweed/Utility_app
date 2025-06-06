
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

import { Link } from "react-router-dom";


function Nav(){
  return(
    
      <nav className="bg-gray-800 text-white p-4 flex justify-around items-center">
               <Link to="/" className="hover:bg-gray-700 transition">Dashboard</Link> | 
               <Link to="/gpa" className="hover:bg-gray-700 transition">GPA Calculator</Link> | 
               <Link to="/cgpa" className="hover:bg-gray-700 transition">CGPA Calculator</Link> | 
              <Link to="/currencyconvertor" className="hover:bg-gray-700 transition">Currency Converter</Link>
             </nav>
  
  );
}
export default Nav;
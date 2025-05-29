// import React,{useState,useEffect,useCallback} from "react";
// import axios from "axios";


// function CurrencyConvertor() {
//     const [amount,setamount]=useState("");
//     const [fromcurrency,setfromcurrency]=useState("INR");
//     const [tocurrency,settocurrency]=useState("USD");
//     const [converted,setconverted]=useState(null);

//     const handleconvert=useCallback(async()=>{
//         if( amount<=0 || isNaN(amount)){
//             setconverted(0);
//             // alert("please enter a valid amount");
//             return;
//         }
//          if (!tocurrency) {
//       alert("Please select a target currency");
//       return;
//     }
//         try{
//             const response= await axios.get("https://api.frankfurter.app/latest",{
//                 params:{
//                     from:fromcurrency,
//                     to:tocurrency,
//                     amount:amount
//                 }
//             });
//             const result=response.data.rates[tocurrency];
//             setconverted(result);
//             console.log("Converted value:", response.data.result);
//             console.log("Full API Response:", response.data);

//         }
//         catch(error){
//             alert("error fetching exchange rate");
//             console.log(error);
//         }
//     },[amount,fromcurrency,tocurrency]);
//     const handleswap=()=>{
//         const temp=fromcurrency;
//         setfromcurrency(tocurrency);
//         settocurrency(temp);
//         setconverted(null); // reset converted value when swapping currencies
//     };
//     useEffect(()=>{
//         handleconvert();
        
//     },[handleconvert]);
//     return(
//         <div>
//             <h1>Currency Convertor</h1>
           
//             <label >
//                 from:{" "}
//                 <select value={fromcurrency} onChange={(e)=>{setfromcurrency(e.target.value)}}>
//                     <option value="USD">USD</option>
//                     <option value="INR">INR</option>
//                     <option value="EUR">EUR</option>
//                     <option value="GBP">GBP</option>
//                     <option value="JPY">JPY</option>
//                     <option value="AUD">AUD</option>
//                     <option value="CAD">CAD</option>
//                     <option value="CNY">CNY</option>
//                     <option value="RUB">RUB</option>
//                     <option value="ZAR">ZAR</option>
//                     <option value="MYR">MYR</option>

//                 </select>
//             </label>
//             <label>
//                 to:{" "}
//                 <select value={tocurrency} onChange={(e)=>{settocurrency(e.target.value)}}>
//                     <option value="INR">INR</option>
//                     <option value="USD">USD</option>
//                     <option value="GBP">GBP</option>
//                     <option value="EUR">EUR</option>
//                     <option value="AUD">AUD</option>
//                     <option value="JPY">JPY</option>
//                     <option value="CNY">CNY</option>
//                     <option value="CAD">CAD</option>
//                     <option value="ZAR">ZAR</option>
//                     <option value="MYR">MYR</option>
//                     <option value="RUB">RUB</option>

//                 </select>
//             </label>
//             <br />
//              <label>
//                 amount:{" "}
//                 <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} />
//             </label>
        
//              <br />
//             {/* <button onClick={handleconvert}>Convert</button>  */}
//             <br />
//             <button onClick={handleswap}>Swap Currency</button>
//             <br />

//             {converted !== null && (
//                 <h3>
//                     Converted Amount: {converted} {tocurrency}
//                 </h3>
//             )}
//         </div>
//     );
// }
// export default CurrencyConvertor;


import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

function CurrencyConverter() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("INR");
  const [toCurrency, setToCurrency] = useState("USD");
  const [converted, setConverted] = useState(null);

  const handleConvert = useCallback(async () => {
    if (amount <= 0 || isNaN(amount)) {
      setConverted(0);
      return;
    }
    if (!toCurrency) {
      alert("Please select a target currency");
      return;
    }

    try {
      const response = await axios.get("https://api.frankfurter.app/latest", {
        params: {
          from: fromCurrency,
          to: toCurrency,
          amount: amount,
        },
      });

      const result = response.data.rates[toCurrency];
      setConverted(result);
    } catch (error) {
      alert("Error fetching exchange rate");
      console.log(error);
    }
  }, [amount, fromCurrency, toCurrency]);

  useEffect(() => {
    handleConvert();
  }, [handleConvert]);

  const handleSwap = () => {
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
    setConverted(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Currency Converter
        </h1>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">From Currency</label>
          <select
            value={fromCurrency}
            onChange={(e) => setFromCurrency(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-100"
          >
            {["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD", "CNY", "RUB", "ZAR", "MYR"].map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">To Currency</label>
          <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-100"
          >
            {["INR", "USD", "GBP", "EUR", "AUD", "JPY", "CNY", "CAD", "ZAR", "MYR", "RUB"].map((code) => (
              <option key={code} value={code}>
                {code}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">Amount</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border rounded-md bg-gray-100"
          />
        </div>

        <div className="flex items-center justify-between gap-2 mb-6">
          <button
            onClick={handleSwap}
            className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-2 rounded-md font-semibold transition"
          >
            Swap
          </button>
        </div>

        {converted !== null && (
          <div className="text-center text-lg font-semibold text-green-600">
            Converted Amount: {converted} {toCurrency}
          </div>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;

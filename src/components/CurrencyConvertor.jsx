import {useState,useEffect,useCallback} from "react";
import axios from "axios";
import Nav from "./nav";



function CurrencyConvertor() {
    const [amount,setamount]=useState("");
    const [fromcurrency,setfromcurrency]=useState("INR");
    const [tocurrency,settocurrency]=useState("USD");
    const [converted,setconverted]=useState(null);

    const handleconvert=useCallback(async()=>{
        if( amount<=0 || isNaN(amount)){
            setconverted(0);
            return;
        }
         if (!tocurrency) {
      alert("Please select a target currency");
      return;
    }
        try{
            const response= await axios.get("https://api.frankfurter.app/latest",{
                params:{
                    from:fromcurrency,
                    to:tocurrency,
                    amount:amount
                }
            });
            const result=response.data.rates[tocurrency];
            setconverted(result);
            console.log("Converted value:", response.data.result);
            console.log("Full API Response:", response.data);

        }
        catch(error){
            alert("error fetching exchange rate");
            console.log(error);
        }
    },[amount,fromcurrency,tocurrency]);

    const handleswap=()=>{
        const temp=fromcurrency;
        setfromcurrency(tocurrency);
        settocurrency(temp);
        setconverted(null);
    };

    useEffect(()=>{
        handleconvert();
    },[handleconvert]);

    return(
        <div>
       <Nav/>

        <div className="min-h-screen bg-gradient-to-br from-cyan-500 to-blue-700 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md space-y-4">
                <h1 className="text-2xl font-bold text-blue-700 text-center mb-4">Currency Convertor</h1>

                <label className="block">
                    <span className="text-sm font-semibold">From:</span>
                    <select value={fromcurrency} onChange={(e)=>{setfromcurrency(e.target.value)}}
                        className="w-full mt-1 p-2 rounded-md border bg-gray-100">
                        <option value="USD">USD</option>
                        <option value="INR">INR</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="JPY">JPY</option>
                        <option value="AUD">AUD</option>
                        <option value="CAD">CAD</option>
                        <option value="CNY">CNY</option>
                        <option value="RUB">RUB</option>
                        <option value="ZAR">ZAR</option>
                        <option value="MYR">MYR</option>
                    </select>
                </label>

                <label className="block">
                    <span className="text-sm font-semibold">To:</span>
                    <select value={tocurrency} onChange={(e)=>{settocurrency(e.target.value)}}
                        className="w-full mt-1 p-2 rounded-md border bg-gray-100">
                        <option value="INR">INR</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="EUR">EUR</option>
                        <option value="AUD">AUD</option>
                        <option value="JPY">JPY</option>
                        <option value="CNY">CNY</option>
                        <option value="CAD">CAD</option>
                        <option value="ZAR">ZAR</option>
                        <option value="MYR">MYR</option>
                        <option value="RUB">RUB</option>
                    </select>
                </label>

                <label className="block">
                    <span className="text-sm font-semibold">Amount:</span>
                    <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)}
                        className="w-full mt-1 p-2 rounded-md border bg-gray-100" />
                </label>

                <div className="flex justify-center gap-4">
                    <button onClick={handleswap}
                        className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition">
                        Swap Currency
                    </button>
                </div>

                {converted !== null && (
                    <h3 className="text-center text-lg font-bold text-green-600">
                        Converted Amount: {converted} {tocurrency}
                    </h3>
                )}
            </div>
        </div>

        </div>
    
    );
}
export default CurrencyConvertor;

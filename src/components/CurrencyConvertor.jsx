import React,{useState,useEffect,useCallback} from "react";
import axios from "axios";


function CurrencyConvertor() {
    const [amount,setamount]=useState("");
    const [fromcurrency,setfromcurrency]=useState("INR");
    const [tocurrency,settocurrency]=useState("USD");
    const [converted,setconverted]=useState(null);

    const handleconvert=useCallback(async()=>{
        if( amount<=0 || isNaN(amount)){
            setconverted(0);
            // alert("please enter a valid amount");
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
        setconverted(null); // reset converted value when swapping currencies
    };
    useEffect(()=>{
        handleconvert();
        
    },[handleconvert]);
    return(
        <div>
            <h1>Currency Convertor</h1>
           
            <label >
                from:{" "}
                <select value={fromcurrency} onChange={(e)=>{setfromcurrency(e.target.value)}}>
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
            <label>
                to:{" "}
                <select value={tocurrency} onChange={(e)=>{settocurrency(e.target.value)}}>
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
            <br />
             <label>
                amount:{" "}
                <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} />
            </label>
        
             <br />
            {/* <button onClick={handleconvert}>Convert</button>  */}
            <br />
            <button onClick={handleswap}>Swap Currency</button>
            <br />

            {converted !== null && (
                <h3>
                    Converted Amount: {converted} {tocurrency}
                </h3>
            )}
        </div>
    );
}
export default CurrencyConvertor;
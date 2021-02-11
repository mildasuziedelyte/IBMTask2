import React, { useState, useEffect, useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"

// //functions
// import {getSearched} from "../helpers/youtubeAPI"

export default function SearchContainer({setQuery}) {
    const [input,setInput] = useState("");
    const [validity, setValidity]=useState(false);   
    
    
    function handleInput (e) {
        e.target.name==="query" && setInput(e.target.value);
        //disabling input after 20 symbols
        input.length > 19 && e.preventDefault();
     
    }

    function validateInput(input) {
        const re= /[^0-9A-Za-z, ]/;
        if (!input.match(re) && input.length > 0) {
            setValidity(false);
            document.getElementById("q").classList.remove("err")
            setInput("");
            return true;
        } else {
            document.getElementById("q").classList.add("err")
            setValidity(true);
            return false;

        }
    }

    function handleSubmit () {
      if (validateInput(input)) {
         setQuery(input)
         //setting searched keyword to backend
         try {
             axios.post("/searches",{
                 keyword:input
             })
            //  .then(res=>console.log(res.data)) <---- dev mode to see outcome
         }
         catch (err) {
            //  console.log(err); <---- dev mode to see outcome
         }
      }
    }
    

    return (
    <div>
<h1 className="text-4xl w-11/12 mx-auto font-semibold mt-2 text-center">Find your next video!</h1>
    <div className="max-w-xl w-10/12 md:w-6/12 flex mx-auto my-3 border-2 justify-between">
        <input id="q" maxLength="20" name="query" value={input} onChange={(e)=>{handleInput(e)}} className="w-11/12 h-8 p-2 rounded-sm focus:outline-none focus:ring focus:border-red-300  w-4/5" type="text"/>

    <div onClick={handleSubmit} className="flex items-center justify-center rounded-sm h-8 bg-blue-300 p-2 text-white font-semibold cursor-pointer">Go</div>

    
    </div>

            {validity && (<p className="text-center text-red-500 mt-3">Please check your input</p>)}
    </div>
    )
}
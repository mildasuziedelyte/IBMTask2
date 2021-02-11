import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom';
import icon from "../../icons/youtube.svg"
export default function Header() {



    return (
        <header className="bg-gray-300 flex flex-col justify-start items-start md:flex-row " >
            <Link to="/">
                <div className="text-center m-2 p-2 flex"> 
                <img style={{width:"30px"}} src={icon} alt=""/> <span className="ml-3 text-black font-semibold text-xl">Not</span> <span className="font-bold text-xl text-white"> Youtube</span></div>
        </Link>
            

        </header>
    )
}

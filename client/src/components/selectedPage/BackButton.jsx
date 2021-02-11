import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom"
export default function BackButton (props) {

    return (
        <Link to="/" className="p-2 text-white bg-blue-300 font-semibold text-primary border border-primary mx-2 hover:bg-blue-400 hover:text-white"> 
            Go back
        </Link>
        )
}


import React, { useState, useEffect } from 'react'
import {formatTime} from "../helpers/dateFormater";


export default function Description ({video}) {

    const [isActive, makeActive] = useState(false);
    function handleSeeMore() {
      makeActive(!isActive)
    }
    const newDate=  new Date(video.snippet.publishedAt);
    const date = newDate.getFullYear();
  
    return (
        <div className="video-about mb-4">
        <p className="mt-3 text-2xl">{video.snippet.title}</p>
        <p>Published at: <span className="font-semibold">{date}</span></p>
        <hr/>
        <p>{video.snippet.channelTitle}</p>
        <hr/>
        <span onClick={handleSeeMore} id="see-more" className="text-blue-300 cursor-pointer font-semibold hover:text-blue-500">
            {isActive ? "See Less" : "See Description"}
         </span>
        <p style={isActive ? {display:"block"} : {display:"none"}} id="description">{video.snippet.description}</p>
        </div>
    )
}
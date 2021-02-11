import React, { useState, useEffect } from 'react'
import {Link} from "react-router-dom";
import {formatTime} from "../helpers/dateFormater";
import axios from "axios";
export default function SingleCard( {video} ) {

    const newDate=  new Date(video.snippet.publishedAt);
    const dateToShow = formatTime(newDate);
    
    function submitClick () {
        window.scrollTo(0,0)
        //sending click information to backend
        axios.post("/clicks", {
            videoTitle: video.snippet.title,
            videoChanel: video.snippet.channelTitle,
            videoId: video.id.videoId
        })
            // .then (res=>console.log(res))
        document.querySelector("title").textContent=video.snippet.title || "NotYoutube"
    }
    
  
    return (
<Link  onClick={submitClick} to={
    {
        pathname:`/video/${video.id.videoId}`,
        state: {
            video:video
        }
        
    }
}> 
<div className="single-card-box mx-auto  w-9/12 md:w-full max-w-sm cursor-pointer">
   <img className="w-full h-10/12 my-2" src={video.snippet.thumbnails.high.url} alt=""/>
    
    <div className="p-2">
        <p className="text-center my-3">{video.snippet.title}</p>
        <p className="text-center text-gray-300 mb-2">{video.snippet.channelTitle}  &#183; {dateToShow} </p>
    </div>
    </div>
</Link>


    )
}
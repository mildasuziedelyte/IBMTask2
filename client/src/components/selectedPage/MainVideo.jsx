import React, { useState, useEffect } from 'react'
import Description from "./Description";
export default function MainVideo({ video }) {


    let videoExtension = video.id.videoId;

    return (

        <div className="w-full md:w-w-8/12">

            <iframe width="420" height="315"
                src={`https://www.youtube.com/embed/${videoExtension}`}>
            </iframe>
            <Description video={video} />
        </div>
    )
}
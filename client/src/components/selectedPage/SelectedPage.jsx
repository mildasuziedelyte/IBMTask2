import React, { useState, useEffect } from 'react'

//components
import MainVideo from "./MainVideo";
import SideBar from "../sidebar/SideBar";
import SearchContainer from "../searchBox/SearchContainer";
import BackButton from "./BackButton"

import { Redirect } from 'react-router-dom';
export default function SelectedPage (props) {

    const videoId = props.match.params.video;
    const [query,setQuery] = useState(false)

   

    return (
        <div className="flex justify-center items-center flex-col">
            <SearchContainer setQuery={setQuery}/>

        {query && <Redirect to={
            {
                pathname:`/`,
                state: {
                    activeQuery:query
                }
            }
        }/>}
        <BackButton/>
        <div className="single-page-container w-11/12">

          
    <MainVideo video={props.location.state.video} />

        <SideBar id={videoId}/>
        </div>


    </div>
    )


}
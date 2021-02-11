import React, { useState, useEffect, useContext } from 'react'


//components

import SearchContainer from "../searchBox/SearchContainer";
import SearchResults from "../searchResults/ResultContainer";



export default function Home (props) {
    
    // const [videos,setVideos]=useState(false);
    const [videos,setVideos]=useState(false);
    const [query,setQuery] = useState(false)
    const [newQuery,setNewQuery] = useState(false)

    
    useEffect(()=>{
        document.querySelector("title").textContent="NotYoutube"
       if (props.location.state) {
           setQuery(props.location.state.activeQuery)
       } 
       
    },[query])
return (
        <div>
            <SearchContainer setQuery={setQuery}/>
       
           {query && <SearchResults query={query}/>}
        </div>

    )
}
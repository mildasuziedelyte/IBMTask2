import React, { useState, useEffect } from 'react'
//3rd party
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

//helpers

import {getSearched} from "../helpers/youtubeAPI";


//compontents 
import SingleCard from "../singleCard/SingleCard";


class ResultContainer extends React.Component {
constructor () {
    super();
}
    state={
        items: Array.from({ length: 8 }),
    videos:[],
    query: "",
    limit:8
}

componentDidMount() {
      
        this.getSearched();
  }
  componentDidUpdate(prevProps) {
    if(prevProps !== this.props)
    this.getSearched();
  }


  async getSearched () {
      try {
          const KEY = process.env.REACT_APP_KEY;
        const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${KEY}&maxResults=${this.state.limit}&&q=${this.props.query}&pageToken=CBQQAA`
        const res= await fetch(url)
        const data = await res.json();
       this.setState({
         videos: data.items,
        limit:(this.state.limit+8)
        })
      
        return (data.items);
      }
      catch (err) {
          console.log("Failed to fetch",err);
      }
    }

  fetchMoreData = () => {
  
    setTimeout(() => {
      this.getSearched();
      this.setState({
        items: this.state.items.concat(Array.from({ length: 8 })),
      });
    }, 1500);
  };

render() {
    return (
<div>
    
<InfiniteScroll className="ifs w-11/12 m-auto mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3"
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.limit < 50 ? true : false}
          loader={<h4>Loading...</h4>}
        >
          {this.state.videos.map((video, index) => (
        
           <SingleCard  key={index} video={video}/>
           
          ))}
        </InfiniteScroll>
        </div>

    )
}

}

export default ResultContainer;
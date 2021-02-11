import React, { useState, useEffect } from 'react'
//3rd party
import {Link} from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import MainVideo from "../selectedPage/MainVideo"
//helpers

import {getSearched} from "../helpers/youtubeAPI";


//compontents 
import SingleCard from "../singleCard/SingleCard";


class SideBar extends React.Component {
constructor () {
    super();
}
    state={
        items: Array.from({ length: 5 }),
    videos:[],
    limit:5
}

componentDidMount() {
        this.getSearched();
       
  }
componentDidUpdate(prevProps) {
    let propsId=this.props.id;
   
    if(prevProps.id !== this.props.id) {
      
        const KEY = process.env.REACT_APP_KEY;
        const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.id}&type=video&key=${KEY}&maxResults=20&pageToken=CBQQAA`
        fetch (url)
            .then(res=>res.json())
                .then(res=>{
                    this.setState({
                        videos:res.items
                    })
                })
        }
    
}

  async getSearched () {
      try {
          const KEY = process.env.REACT_APP_KEY;
          const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${this.props.id}&type=video&key=${KEY}&maxResults=20&pageToken=CBQQAA`
          const res= await fetch(url)
        const data = await res.json();
       this.setState({
         videos: data.items,
        limit:(this.state.limit+5)
        })
      
      
        return (data.items);
      }
      catch (err) {
          console.log("Failed to fetch",err);
      }
    }

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.getSearched();
      this.setState({
        items: this.state.items.concat(Array.from({ length: 5 })),
      });
    }, 1500);
  };

render() {
    return (
<div>
    <p>Related Videos</p>
<InfiniteScroll className="w-full flex flex-col"
          dataLength={this.state.items.length}
          next={this.fetchMoreData}
          hasMore={this.state.limit < 50 ? true : false}
          loader={<h4>Loading...</h4>}
        >
          {this.state.videos && this.state.videos.map((video, index) => (
        
           <SingleCard key={index} video={video}/>
           
          ))}
        </InfiniteScroll>
        </div>

    )
}

}

export default SideBar;

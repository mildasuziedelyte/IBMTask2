
const KEY = process.env.REACT_APP_KEY;


export async function getTrending () {
    const url=`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=LT&key=${KEY}&maxResults=20&`
  const res= await fetch(url)
  const data = await res.json();
  return (data.items);
}


export async function getRelated (id) {
    const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&key=${KEY}&maxResults=20&pageToken=CBQQAA`
    const res= await fetch(url)
    const data = await res.json();
    return (data.items);
}

export async function getSearched (query,limit) {
    const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${KEY}&maxResults=${limit}&&q=${query}&pageToken=CBQQAA`
    const res= await fetch(url)
    const data = await res.json();
  
    return (data.items);
}


export async function getSelected(id){
    const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&key=${KEY}&maxResults=20&&id=${id}`
    const res= await fetch(url)
    const data = await res.json();
    return (data.items);
}

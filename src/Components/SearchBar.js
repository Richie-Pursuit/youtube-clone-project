import React from 'react';
import { useState, useEffect } from "react"
import VideoCard from './VideoCard';




function SearchBar({ result, setResult }) {
   
    
  const [searchTitle, setSearchTitle] = useState("")


  let videoURL=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTitle}&key=${process.env.REACT_APP_API_KEY}`


    function handleSubmit(e) {
        e.preventDefault();
        if (e.target.value !== "") {
          fetchData(searchTitle);
          setSearchTitle("");
        }
    }



    function fetchData(searchTitle) {
        fetch(videoURL)
          .then((res) => res.json())
          .then(
            (data) => setResult(data.items)
            // console.log(data)
            
          )
          .catch((err) => {
            console.log(err);
          });
      }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className='search'>
                    <input
                    type="text"
                    value={searchTitle}
                    onChange={(e) => setSearchTitle(e.target.value)}
                     />
                     
                <button type="submit">Submit</button>
            </div>
          </form>

          {result.map(vid =>{
              return <VideoCard vid={vid} key={vid.id} />
            })}
        </div>
    );
}

export default SearchBar;
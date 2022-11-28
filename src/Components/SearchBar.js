import React from 'react';
import { useState, useEffect } from "react"
import VideoCard from './VideoCard';
import ErrModal from './ErrModal';




function SearchBar({ result, setResult, setErrModal, errModal }) {
   
    
  const [searchTitle, setSearchTitle] = useState("")


  let videoURL=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${searchTitle}&key=${process.env.REACT_APP_API_KEY}`

    function handleSubmit(e) {
        e.preventDefault();
        if (searchTitle.length === 0) setErrModal(true)
        if (searchTitle.length !== 0) {
          fetchData(searchTitle);
          setSearchTitle("");
        }
    }

    function fetchData() {
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
            {errModal && <ErrModal errModal={errModal} closeM={setErrModal}/>}
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
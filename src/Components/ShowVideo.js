import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';






function ShowVideo(props) {
    const { id  } = useParams()
    let fetch_url=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${id}&key=${process.env.REACT_APP_API_KEY}`
    const [vid, setVid] = useState([]);
    
    

    useEffect(()=>{
        fetch(`${fetch_url}`)
            .then((res) => res.json())
            .then((res) => {
              setVid(res.items);
            })
            .catch((err) => console.log(err));
        
    },[])
    // const { data: vidData, error, isPending }=useFetch(`${URL}`)

    return (
        <div>
          
         {/* {vid.map((video, i)=>{
            return(
                <div key={i}>
                    <h5>{video.snippet.channelTitle}</h5>
                    <h4>{video.snippet.title}</h4>
                </div>

            )
         })} */}

           <p>PAGEEEE with # { id } </p>
        </div>
    );
}

export default ShowVideo;
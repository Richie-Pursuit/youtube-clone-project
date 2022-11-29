import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import { useEffect, useState } from "react";
import YouTube from 'react-youtube';
import Modal from './Modal';







function ShowVideo(props) {


    const { id  } = useParams()
    let fetch_url=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${id}&key=${process.env.REACT_APP_API_KEY}`
    const [vid, setVid] = useState([]);
    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)
    const [openModal, setOpenModal]=useState(false)
    
    const opts = {
    videoId: id,
    autoplay: true,
    mute: true,
    controls: true,
    loop: true,
    playsInline: true,
    preload: "auto",
    width: "640",
    height: "390",
    aspectRatio: "16:9",
  };
    

    useEffect(()=>{
        fetch(`${fetch_url}`)
            .then((res) => res.json())
            .then((res) => {
              setVid(res.items[0]);
            })
            .catch((err) => console.log(err));
        
    },[])
    // const { data: vidData, error, isPending }=useFetch(`${URL}`)

    return (
        <div>
            <br></br>
            {openModal && <Modal closeModal={setOpenModal} />}
          <YouTube opts={opts} videoId={id} />


      <h1>{vid.snippet?.title}</h1>
      <h2>{vid.snippet?.channelTitle}</h2>
      {/* <button class='share' onClick={()=>{setModal(true)}} >Share Now</button>
        {modal ? <Modal open={modal} onClose={()=> setModal(false)} />: null} */}
       
       
       
        <button onClick={()=>{setOpenModal(true)}}>Share Now</button>
        





        <br></br>
        <br></br>
        <button onClick={()=>{setLike(like + 1)}}>😃 Likes {like}</button>
        <button onClick={()=>{setDislike(dislike + 1)}}> 🥵 Dislikes {dislike}</button> 
        
        
        {/* <p>{vid.snippet?.description}</p> */}
          
          
         {/* {vid.map((video, i)=>{
            return(
                <div key={i}>
                    <h5>{video.snippet.channelTitle}</h5>
                    <h4>{video.snippet.title}</h4>
                </div>

            )
         })} */}

        </div>
    );
}

export default ShowVideo;
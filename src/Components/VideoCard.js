import { React, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ShowVideo from './ShowVideo';


function VideoCard({ vid }) {
    const { id } = useParams()




    return (
        <div className="videocard">
            <p>PARAAMMMM - {id}</p>
       
          <div>
            <Link 
            to={`/videos/<${vid.id.videoId}>`}
            state={{ title: vid.snippet.title }}>

              <img
                src={vid.snippet.thumbnails.medium.url}
                alt={vid.snippet.title} />
              <h2>{vid.snippet.title}</h2>
              {/* <p>{vid.snippet.description}</p> */}
              </Link>
          </div>
      
    </div>
    );
}

export default VideoCard;
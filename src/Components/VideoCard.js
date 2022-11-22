import { React, useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import ShowVideo from './ShowVideo';


function VideoCard({ vid }) {
    const { id } = useParams()




    return (
        <div className="video">
       
          <div>
            <Link 
            to={`/videos/${vid.id.videoId}`}
            state={{ title: vid.snippet.title }}>

              <img
                src={vid.snippet.thumbnails.medium.url}
                alt={vid.snippet.title} />
              <h2>{vid.snippet.title}</h2>
              </Link>
          </div>
      
    </div>
    );
}

export default VideoCard;
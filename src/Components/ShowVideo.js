import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';



function ShowVideo(props) {
    const { id } = useParams
    const { data: vid,  error, isPending} = useFetch(`${BASE_URL}`)
    let URL=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${id}&key=${process.env.REACT_APP_API_KEY}`

    return (
        <div>
        {/* //    {isPending && <div>Loading...</div>}
        //    {error && <div>{error}</div>}
        //    {vid &&(
        //     <article>
        //         <h2>{ vid.snippet.title }</h2>
        //     </article>
        //    )} */}
           <p>PAGEEEE </p>
        </div>
    );
}

export default ShowVideo;
import { useState, useEffect } from "react";

const useFetch= (url) =>{
    const[isPending, setIsPending] = useState(true)
    const [data, setdata] =useState(null)
    const [error, setError] =useState(null)
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
        setTimeout(()=>{
            fetch(`url`)
            .then(res => {
                if(!res.ok){
                    throw Error(`could not fetch the data for that resouce`)
                }
                return res.json
            })
            .then(data => {
                setdata(data)
                setIsPending(false)
                setError(null)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
        }, 1000)
    },[])
    return { data, isPending, error }
}


export default useFetch;

const URL = `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`




export function getFetch(value) {
     let videoURL=`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${value}&key=${process.env.REACT_APP_API_KEY}`
   }

   export function getAllVideos() {
     return fetch(`${URL}/shows`)
     .then(res => res.json())
   }
import { React, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoCard from './VideoCard';




function Home() {

    const [result, setResult] = useState([]);
    const [errModal, setErrModal]=useState(false)
    return (
        <div>
            <h1>Search A Video</h1>
            <SearchBar 
            result={result} 
            setResult={setResult} 
            errModal={errModal} 
            setErrModal={setErrModal} />
            


        </div>
    );
}

export default Home;
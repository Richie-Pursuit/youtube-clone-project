import { React, useEffect, useState } from 'react';
import SearchBar from './SearchBar';
import VideoCard from './VideoCard';




function Home() {

    const [result, setResult] = useState([]);
    return (
        <div>
            <h1>Home Page</h1>
            <SearchBar result={result} setResult={setResult}/>
            


        </div>
    );
}

export default Home;
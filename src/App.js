import React, {useEffect} from 'react';
import SearchIcon from './search.svg';
// aa38f233
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=aa38f233';

function App() {
    // const search

    return (<div className='app' >
    <h1>
        MovieLand
    </h1>
    <div className='search'>
        <input placeholder='Search for movies' value="Superman" onChange={}/>
        <img src={SearchIcon} alt = "search" />

    </div>
    </div>);
}

export default App;

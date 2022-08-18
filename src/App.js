import React, { useEffect, useState } from 'react';
import SearchIcon from './search.svg';
// aa38f233
import './App.css';
import Card from './Card';
const API_URL = 'http://www.omdbapi.com?apikey=aa38f233';

function App() {
    const [searchBar, setSearchBar] = useState('');
    const [movies, setMovies] = useState([]);

    function createCard(movie) {
        return (
            <Card
                Type={movie.Type}
                Year={movie.Year}
                Poster={movie.Poster}
                Title={movie.Title}
            />
        );
    }
    // const afd = fetch(`${API_URL}&s=${'spiderman'}`);
    // console.log(afd);
    async function searchMovies(title) {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);

        return movies.map(createCard);
    }

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchBar}
                    onChange={(e) => {
                        setSearchBar(e.target.value);
                    }}
                />
                <img
                    onClick={searchMovies({ searchBar })}
                    src={SearchIcon}
                    alt="search"
                />
            </div>
        </div>
    );
}

export default App;

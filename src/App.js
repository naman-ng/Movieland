import React, { useState, useEffect } from 'react';
import SearchIcon from './search.svg';
// aa38f233
import './App.css';
import Card from './Card';
const API_URL = 'https://www.omdbapi.com?apikey=aa38f233';

function App() {
    const [searchBar, setSearchBar] = useState('');
    const [movies, setMovies] = useState([]);

    async function searchMovies(title) {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search);
        console.log(movies);

        // movies.map(createCard);
    }

    useEffect(() => {
        searchMovies('Batman');
    }, []);

    return (
        <div className="app">
            <h1>MovieLand</h1>
            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchBar}
                    // key={searchBar}
                    onChange={(e) => {
                        setSearchBar(e.target.value);
                    }}
                />
                <img
                    onClick={() => searchMovies(searchBar)}
                    src={SearchIcon}
                    alt="search"
                />
            </div>
            {movies.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <Card movie={movie} />
                    ))}
                </div>
            ) : (
                <div className="empty">
                    <h2>No Movies Found</h2>{' '}
                </div>
            )}
        </div>
    );
}

export default App;

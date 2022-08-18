import React from 'react';

function Card(movie) {
    return (
        <div className="container">
            <div className="movie">
                <div>
                    <p> {movie.Year} </p>
                </div>
                <div>
                    <img
                        src={
                            movie.Poster
                                ? movie.Poster
                                : 'https://picsum.photos/400/400'
                        }
                    />
                </div>
                <span>{movie.Type}</span>
                <h3>{movie.Title} </h3>
            </div>
        </div>
    );
}

export default Card;

import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import MovieItem from './MovieItem';
import './MoviesList.css';

function MovieList(props){
    const { movies = [] } = props;
        return(
            <div className="movie-list">
                
                <SearchBar />
                
                <div className="movies-container">
                { movies.length > 0
                   ? movies.map((movie, index) =>
                    <MovieItem
                        title={movie.name}
                        year={movie.year}
                        description={movie.description}
                        key={index} />
                    )
                    : "No movies found"}
                </div>
            </div>
        ) 
}
export default MovieList;
import React from 'react';
import SearchBar from './components/SearchBar'
import MovieItem from './MovieItem';
import './MoviesList.css';

function MovieList(props){
    const { movies = [], addMovie, deleteMovie } = props;
        return(
            <div className="movie-list">
                
                <SearchBar addMovie = {addMovie} />
                
                <div className="movies-container">
                { movies.length > 0
                   ? movies.map((movie) =>
                    <MovieItem
                        title={movie.name}
                        url={movie.poster}
                        year={movie.year}
                        plot={movie.plot}
                        key={movie.id} 
                        deleteMovie={deleteMovie}
                        id={movie.id}
                        rating={movie.rating}
                        />
                    )
                    : "No movies found"}
                </div>
            </div>
        ) 
}
export default MovieList;
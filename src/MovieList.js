import React, { Component } from 'react';
import SearchBar from './components/SearchBar'
import MovieItem from './MovieItem';
import './MoviesList.css';

function MovieList(props){
    const { movies = [] } = props;
        return(
            <div className="movie-list">
<<<<<<< HEAD
                <div className="movies-container">
               
                <MovieItem 
                    title="{this.state.listOfMovies}"
                    year="2001"
                    desc="A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
                />
            
=======
                
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
>>>>>>> c149b18ef4d67805c84162c9385a9aa378c5df61
                </div>
            </div>
        ) 
}
export default MovieList;
import React from 'react';
import Button from '@material-ui/core/Button';
import MovieItem from './MovieItem';
import MoviesStyle from './MoviesList.css';

function MovieList() {
    return(
        <div className="movie-list">
            <div className="movies-container">
            <MovieItem 
                title="Lord of the Rings"
                year="2001"
                desc="A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron."
            />
            </div>
           <Button variant="contained" color="primary">
                Add New Movie
            </Button> 
        </div>
    )
}
export default MovieList;
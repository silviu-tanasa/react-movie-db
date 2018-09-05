import React, { Component } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import MovieItem from './MovieItem';
import './MoviesList.css';

class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listOfMovies: []
        };
    }

    componentDidMount() {
        axios.get('http://localhost:3000/movies').then((response) => {
            console.log(response.data);
            this.setState({
                listOfMovies: response.data,
            });
            
        })
    }

    // listMovies() {
    //     for(let i = 0; i < this.state.listOfMovies.length; i++)
    //         console.log(this.state.listOfMovies[i].title)
    // }

    render() {
        return(
            <div className="movie-list">
                <div className="movies-container">
               
                <MovieItem 
                    title="{this.state.listOfMovies}"
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
    
}
export default MovieList;
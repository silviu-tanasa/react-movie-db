import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList';
import { getMovies, createMovie, deleteMovie } from './Api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    getMovies().then(response => {
        console.log(response.data)
        this.setState({ movies: response.data })
      })
  }

  deleteMovie = (id) => {
    deleteMovie(id).then(() => {
      const { movies } = this.state;
      const filtered = movies.filter(m => m.id !== id)
      this.setState({
        movies: filtered
      })
    })
  }

  addMovie = (movie) => {
    const newMovie = { 
      ...movie,
      id: movie.imdb_id,
      name: movie.title
    }
    createMovie(newMovie).then(() => {
      this.setState({
        movies: [newMovie, ...this.state.movies]
      })
    })
  }

  render() {
    const { movies } = this.state
    return (
      <div>
        <Header />
        <MovieList 
          movies={movies} 
          addMovie={this.addMovie}
          deleteMovie={this.deleteMovie}
          />
      </div>
    );
  }
}

export default App;

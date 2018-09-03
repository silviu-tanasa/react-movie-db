import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import MovieList from './MovieList';
import { getMovies } from './Api'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    }
  }

  componentDidMount() {
    getMovies().then(response => {
        this.setState({ movies: response.data })
      })
  }

  render() {
    return (
      <div>
        <Header />
        
        <MovieList movies={this.state.movies}/>
      </div>
    );
  }
}

export default App;

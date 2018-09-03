import React from 'react';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import SearchResult from './SearchResult';
import './SearchBar.css'
import { searchMovie } from '../Api'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchTerm: ''
        }
    }

    onInputChange = event => {
        const { value } = event.target;
        this.setState({
            searchTerm: value
        })
    }

    search = (event) => {
        event.preventDefault;
        searchMovie(this.state.searchTerm).then((response) => {
            this.setState({
                results: response.data
            })
        });
    }

    addMovie = movie => {
        
    }

    render() {
        const { results, searchTerm } = this.state
        return(
            <div>
                <div className="search-component">
                    <TextField
                        label="Search Movie"
                        className="search"
                        value={searchTerm}
                        onChange={this.onInputChange}
                    />
                    <IconButton className="search-btn" onClick={this.search}>
                        <Icon>search</Icon>
                    </IconButton>
                </div>

                <div className="search-result">
                    {results.length > 0 
                     ? results.map(movie => (
                        <SearchResult 
                            key={movie.id} 
                            movie={movie} 
                            addMovie={this.addMovie}/>
                    ))
                     : ""}
                </div>
            </div>
        )
    }
}

export default SearchBar;
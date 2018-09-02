import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class SearchMovie extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    render() {
        return(
            <div className="search-component">
                <TextField
                    id="name"
                    label="Search Movie"
                    className="search"
                    value={this.state.name}
                    onChange={this.handleChange('name')}
                />
                <Button className="search-btn" variant="contained" color="primary">
                        Add New Movie
                </Button> 
            </div>
        )
    }
}

export default SearchMovie;
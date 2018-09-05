import React from 'react';
import Card from '@material-ui/core/Card'
import { CardContent, Typography, CardActions, Button } from '../../node_modules/@material-ui/core';
import Icon from '@material-ui/core/Icon';
import './SearchBar.css'

export default function SearchResult(props) {
    const { movie, addMovie } = props;
    return (
            <Card className="result-card">
                <CardContent>
                    <Typography>{movie.title} ({movie.year})</Typography>
                </CardContent>
                <CardActions>
                    <Button className="add-btn" onClick={() => addMovie(movie)}>
                        <Icon>add</Icon>
                        Add Movie
                    </Button>
                </CardActions>
            </Card>

    ) 
        
}
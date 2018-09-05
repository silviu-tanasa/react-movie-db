import React from 'react';
import Card from '@material-ui/core/Card'
import { CardContent, Typography } from '../../node_modules/@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import './SearchBar.css'

export default function SearchResult(props) {
    const { movie, addMovie } = props;
    return (
        <div>
            <Card>
                <CardContent>
                    <Typography>{movie.title} ({movie.year})</Typography>
                </CardContent>

                <IconButton className="add-btn" onClick={addMovie(movie)}>
                    <Icon>add</Icon>
                </IconButton>
            </Card>
        </div>
    ) 
        
}
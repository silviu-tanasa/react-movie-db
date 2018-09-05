import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const MovieItem = (props) => {
    const { title, year, description, deleteMovie } = props
    return (
    <Card className="movie-item">
        <CardContent>
            <Typography variant="headline" component="h2">
                {props.title}
            </Typography>
            <Typography color="textSecondary">
                {props.year}
            </Typography>
            <Typography component="p">
                {props.description}
            </Typography>
        </CardContent>
        
    </Card>
    //add card action for delete option
)
}

export default MovieItem;
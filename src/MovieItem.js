import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

const Placeholder = () => {
    return (
      <div className="placeholder">
        <span>No image found</span>
      </div>
    )
  }

const MovieItem = (props) => {
    const { title, year, plot, url = '', deleteMovie } = props

    return (
    <Card className="movie-item">
        {url.length > 0 ? (
            <CardMedia
                className="movie-poster"
                image={url}
                title="Alt text"
                component="img"
                />
            ) : (
                <Placeholder />
            )}
        <CardContent>
            <Typography variant="headline" component="h2">
                {title}
            </Typography>
            <Typography color="textSecondary">
                {year}
            </Typography>
            <Typography component="p">
                {plot}
            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => deleteMovie(props.id)}>
                <Icon>delete</Icon>
                Delete Movie
            </Button>
        </CardActions>
        
    </Card>
    //add card action for delete option
)
}

export default MovieItem;
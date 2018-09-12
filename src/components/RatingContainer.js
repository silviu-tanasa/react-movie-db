import React, { Component } from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import UserRating from './UserRating';

class RatingContainer extends Component {
    render() {
        const { rating } = this.props;
        return (
            <CardContent>
                <Typography component="p">
                  IMDB Rating: {rating}
                </Typography>
                <UserRating numStars={5}/>
            </CardContent>
        );
    }
}

export default RatingContainer;
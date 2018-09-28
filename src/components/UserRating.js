import React, { Component } from 'react';
import { Icon } from '../../node_modules/@material-ui/core';


const Star = (props) => {
    return(
        <span><Icon>{props.selected ? 'star_border' : 'star'}</Icon></span>
    )
}

export default class UserRating extends Component{
    constructor(props) {
        super(props);

        const stars = [...Array(props.numStars)].map((el, i) => {
            return {
                id: i,
                selected: false
            }
        })
        this.state = { stars: stars }
    }
    onMouseEnter(ev, el) {}

    onMouseLeave(ev, el) {}

    render() {
        const numStars = this.props;
        return (
            <div>
                User Rating
                <p>
                    {this.state.stars.map((e, i) => (
                        <Star 
                            key={i} 
                            index={i}
                            onMouseEnter={() => console.log('mouse enter')}
                            onMouseLeave={() => console.log('mouse leave')}
                        />
                    ))}
                </p>
            </div>
        );
    }
    
};
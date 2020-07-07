import React, { Component, Fragment } from 'react';


import Carousel1, { consts } from 'react-elastic-carousel';
import Item from './Item';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
];



class Carousel extends Component {
    constructor(props) {
        super(props)
        }

    render() {
        return (
            <Fragment>

                <Carousel1 itemsToShow={1} showArrows={true} enableAutoPlay={true} transitionMs={600} sliderPosition={3} >
                    <Item id='1'>1</Item>
                    <Item id='2'>2</Item>
                    <Item id='3'>3</Item>
                    <Item id='4'>4</Item>
                    <Item id='5'>5</Item>
                    <Item id='6'>6</Item>
                </Carousel1>

            </Fragment>

        )
    }

}

export default Carousel;
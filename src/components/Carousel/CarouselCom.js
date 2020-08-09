import React from 'react'
import {Cards } from './Cards';
import Carousel from 'react-elastic-carousel';


export const CarouselCom = () => {
const breakPoints = [
    {width: 1, itemToShow: 1},
    {width: 500, itemToShow: 2},
    {width: 768, itemToShow: 3},
    {width: 1500, itemToShow: 4}]

    return (
        <div>
            <Carousel breakpoints={breakPoints}>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                
            </Carousel>
        </div>
    )
}

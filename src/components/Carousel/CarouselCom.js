import React from 'react'
import {carouselone} from './../Graphics/carouselone.jpg';
import {Cards } from './Cards';
import Carousel from 'react-elastic-carousel';


export const CarouselCom = () => {
const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 500, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1500, itemsToShow: 4}];

    

    return (
        <div>
            <Carousel breakPoints={breakPoints}>
                <Cards style={{ backgroundImage: `url(${carouselone})` }}/>
                <Cards/>
                <Cards/>
                <Cards/>
                <Cards/>
                
            </Carousel>
        </div>
    )
}

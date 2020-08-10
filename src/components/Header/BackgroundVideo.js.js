import React from 'react'
import Card from '@material-ui/core/Card'
import {makeStyles} from "@material-ui/core/styles";



import classes from './../Header/BackgroundVideo.module.css';

export const BackgroundVideo = () => {
    
    const videoSource = "https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.mp4"
    return (
        <div className={classes.Container} >
        <video autoPlay="autoplay" loop="loop" muted className={classes.Video} >
            <source src={videoSource} type="video/mp4" />
            
        </video>

        <div className={classes.Content}>
            <div className={classes.SubContent} >
               
                <img
                    src="https://junto.digital/wp-content/uploads/2018/09/hero-home.jpg"
                    alt="photo" />
            </div>
        </div>
        </div>
    )
}

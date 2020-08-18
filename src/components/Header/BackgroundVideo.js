import React from 'react'



export const BackgroundVideo = () => {
    
    const videoSource = "https://junto.digital/wp-content/uploads/2018/12/junto-digital-hero.mp4"
    return (
        <div className="Container" >
        <video autoPlay="autoplay" loop="loop" muted className="Video" >
            <source src={videoSource} type="video/mp4" />
            
        </video>

        <div className="Content">
            <div className="SubContent">
               
                
            </div>
        </div>
        </div>
    )
}

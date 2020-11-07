import React, { useState } from "react";
import styles from "./videoplayer.module.scss";

// Components
import {Subtitle, P, H2, H4} from './Typography'
import {EditableTextComment} from './EditableText'
// Assets
import logo from '../Assets/uniflow_primary.jpeg'
import about_uniflow_thumbnail from '../Assets/about_uniflow_thumbnail.jpg'
import uniflow_demo_thumbnail from '../Assets/uniflow_demo_thumbnail.jpg'
import stock1_thumbnail from '../Assets/stock1_thumbnail.jpg'
import stock2_thumbnail from '../Assets/stock2_thumbnail.jpg'

function Videoplayer(props) {
    const [currVideo, setCurrVideo] = useState("https://www.youtube.com/embed/ChBR6t_v0uE?autoplay=1&mute=1&autohide=2");
    const [currVideoTitle, setCurrVideoTitle] = useState("About Uniflow");
    const [comments, setComments] = useState(["Love it!", "Wow!"]);
    const [temp, setTemp] = useState(true);

    function handleVideo(video) {
        var y = document.getElementById("video_player");
        y.src = video;
        // y.play();
    };


    return (
    <>
      <div className={styles.container}>
        <div className={styles.video}>
            <H4 style={{color: '#c4c4c4'}}>Video Player</H4>
            <div className={styles.video__title}>
                <H2 style={{fontWeight: '600', color: '#01002c'}}>{currVideoTitle}</H2>
                
                <svg onClick={()=>{setCurrVideo("https://www.youtube.com/embed/ox-Y3d6wgDs?autoplay=1&mute=1&autohide=2"); setCurrVideoTitle("UniFlow Demo")}} className={styles.video__title__svg} width="1.5rem" height="1.5rem" viewBox="0 0 16 16" class="bi bi-shuffle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                    <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                </svg>
            </div>
            <iframe className={styles.video__player} id="video_player" alt="UniFlow Video" src={currVideo}/>
        </div>
        <div class={styles.thumbnails}>
            <div className={styles.thumbnail} onClick={()=>{setCurrVideo("https://www.youtube.com/embed/ChBR6t_v0uE?autoplay=1&mute=1&autohide=2"); setCurrVideoTitle("About UniFlow")}}>
                <img className={styles.thumbnail__image} alt="About UniFlow" src={about_uniflow_thumbnail}/>
                <div>
                    <H4 style={{marginLeft: '1rem', color: '#01002c'}}>About UniFlow</H4>
                    <P style={{marginLeft: '1rem', color: '#755a3d'}}>0:58</P>
                </div>
            </div>
            
            <div className={styles.thumbnail} onClick={()=>{setCurrVideo("https://www.youtube.com/embed/ox-Y3d6wgDs?autoplay=1&mute=1&autohide=2"); setCurrVideoTitle("UniFlow Demo")}}>
                <img className={styles.thumbnail__image} alt="UniFlow Demo" src={uniflow_demo_thumbnail} />
                <div>
                    <H4 style={{marginLeft: '1rem', color: '#01002c'}}>UniFlow Demo</H4>
                    <P style={{marginLeft: '1rem', color: '#755a3d'}}>2:55</P>
                </div>
            </div>

            <div className={styles.thumbnail} onClick={()=>{setCurrVideo("https://www.youtube.com/embed/IV7rdA0fY30?autoplay=1&mute=1&autohide=2"); setCurrVideoTitle("Stock Video 1")}}>
                <img className={styles.thumbnail__image} alt="Stock Video 1" src={stock1_thumbnail}/>
                <div>
                    <H4 style={{marginLeft: '1rem', color: '#01002c'}}>Stock Video 1</H4>
                    <P style={{marginLeft: '1rem', color: '#755a3d'}}>0:34</P>
                </div>
            </div>
            
            <div className={styles.thumbnail} onClick={()=>{setCurrVideo("https://www.youtube.com/embed/fp7Mj5W7-7M?autoplay=1&mute=1&autohide=2"); setCurrVideoTitle("Stock Video 2")}}>
                <img className={styles.thumbnail__image} alt="Stock Video 2" src={stock2_thumbnail}/>
                <div>
                    <H4 style={{marginLeft: '1rem', color: '#01002c'}}>Stock Video 2</H4>
                    <P style={{marginLeft: '1rem', color: '#755a3d'}}>0:17</P>
                </div>
            </div>
            
        </div>
      </div>
      
      <div className={styles.container__func}>
          <div class={styles.video__player__func}>
                <H4 style={{color: '#01002c'}}>Comments: </H4>
                <EditableTextComment default="Type your comment here:" comments={comments} update={setTemp} original={temp}/>
                {comments.map(comment => 
                <div style={{margin: '2rem 0'}}>
                    <P style={{fontWeight: 'bold'}}>Anonymous User:</P>
                    <P style={{wordWrap: 'break-word'}}>{comment}</P>
                </div>
                )}
            </div>
      </div>
    </>
    
    );
  }
  
  export default Videoplayer;
  
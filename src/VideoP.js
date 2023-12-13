import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from "react";
import { SlControlPlay,SlControlPause,SlControlEnd,SlControlForward } from "react-icons/sl";
import { IconContext } from "react-icons";
import video from "./Shrek 2.mp4";




function Video() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState([0, 0]);
  const [currentTimeSec, setCurrentTimeSec] = useState();
  const [duration, setDuration] = useState([0, 0]);
  const [durationSec, setDurationSec] = useState();

  function sec2Min(sec) {
    const min = Math.floor(sec / 60);
    const secRemain = Math.floor(sec % 60);
    return {
      min: min,
      sec: secRemain
    };
  };

  useEffect(() => {
    const { min, sec } = sec2Min(videoRef.current.duration);
    setDurationSec(videoRef.current.duration);
    setDuration([min, sec]);

    console.log(videoRef.current.duration);
    const interval = setInterval(() => {
      const { min, sec } = sec2Min(videoRef.current.currentTime);
      setCurrentTimeSec(videoRef.current.currentTime);
      setCurrentTime([min, sec]);
    }, 1000);
    return () => clearInterval(interval);
  }, [isPlaying]);




  function handlePlay() {
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div>
    <div className="header" >Shrek</div>
    <div className="container">
      <div className="playerContainer">
        <video className="videoPlayer" ref={videoRef} src={video}></video>
          <button className="midButton" onClick={handlePlay}>
            <IconContext.Provider value={{ color: "white", size: "5em" }}>
              { isPlaying ? ( <SlControlPause />  ) : (  <SlControlPlay /> ) }
            </IconContext.Provider>
          </button> 
          {currentTimeSec < durationSec*0.05 ? (
          <button className="skipButton" onClick={() => videoRef.current.currentTime = durationSec*0.05 + 1}>
            <IconContext.Provider value={{ color: "white", size: "5em" }}>
              <SlControlForward/>
            </IconContext.Provider>
          </button> ) : (null) }
        <div className="controlsContainer">
          <div className="controls">
            <button className="controlButton" onClick={handlePlay}>
              <IconContext.Provider value={{ color: "white", size: "2em" }}>
                { isPlaying ? ( <SlControlPause />  ) : (  <SlControlPlay /> ) }
              </IconContext.Provider>
            </button>  
            <IconContext.Provider value={{ color: "white", size: "2em" }}>
              <SlControlEnd />
            </IconContext.Provider>
            <div className="duration">
              {currentTime[0]}:{currentTime[1]} / {duration[0]}:{duration[1]}
            </div>
          </div>
          <input
            type="range"
            min="0"
            max={durationSec}
            default="0"
            value={currentTimeSec}
            className="timeline"
            onChange={(e) => {
              videoRef.current.currentTime = e.target.value;
            }}
          />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Video;

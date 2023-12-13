import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./Home";
import VideoP from "./About";
import './App.css';
import video from "./WALL-E.mp4";
import video2 from "./Ice Age.mp4";
import video3 from "./Monsters Inc.mp4";
import video4 from "./Shrek 2.mp4";
import video5 from "./The Lion King.mp4";

function LinkMovie({ value }) {
  return (
    <li>
    <Link to={"/"+value}>{value}</Link>
  </li>
  );
}


const App = () => (
  <BrowserRouter>
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <LinkMovie value={"WALL-E"}/>
        <LinkMovie value={"Ice Age"}/>
        <LinkMovie value={"Monsters Inc"}/>
        <LinkMovie value={"Shrek 2"}/>
        <LinkMovie value={"The Lion King"}/>
      </ul>
    </div>
    <div className='wrapper'>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/WALL-E' element={<VideoP imya={"WALL-E"} video={video}/>}/>
      <Route path='/Ice Age' element={<VideoP imya={"Ice Age"} video={video2}/>}/>
      <Route path='/Monsters Inc' element={<VideoP imya={"Monsters Inc"} video={video3}/>}/>
      <Route path='/Shrek 2' element={<VideoP imya={"Shrek 2"} video={video4}/>}/>
      <Route path='/The Lion King' element={<VideoP imya={"The Lion King"} video={video5}/>}/>
    </Routes>
    </div>
  </BrowserRouter>
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
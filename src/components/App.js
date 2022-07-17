import React, { useState } from 'react'
import '../styles/App.css';
import star from '../star.png'
const App = () => {
  return (
    <div id="main">
      <img src={star}  height="300px" width="300px" />
      <img src={star}  height="302px" width="302px" />
      <img src ={star} height="304px" width="304px" />
    </div>
  )
}


export default App;

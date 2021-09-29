import React, {Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'



export default function LandingPage() {
  return (
    <div className='bodylanding'>
      
        <div>
        <div className='name'>Welcome to Videogame Finder</div>
        </div >
        <div className="wrapper">
        <Link to='/home'>
          <button className='button'>START</button>
        </Link>
        </div>
    
    </div>
  );
}

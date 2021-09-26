import React, {Component, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './LandingPage.css'



export default function LandingPage() {
  return (
    <div className='bodylanding'>
      
      
      <Link to='/home'>
        <button className='button'>let's Go</button>
      </Link>
    
    <div>
      <h1 className='h1'>Welcome to Videogame Finder</h1>
    </div></div>
  );
}

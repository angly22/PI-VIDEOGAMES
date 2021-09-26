import React from "react";
// eslint-disable-next-line 
export default function Card({background_image,name,genres,rating}) {
console.log(genres)
    return (
      <div className='container' >
        <h2>{name}</h2>
        {genres.map(el=>(<h4>{el.name}</h4> ))}
        <img src={background_image} alt="img not found" width="200px" height="250px"></img>
        </div>
    );
  }
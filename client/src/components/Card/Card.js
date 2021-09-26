import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line 
export default function Card({id,background_image,name,genres,rating,released}) {
console.log(genres)
console.log(id)
    return (
      <Link to={`/videogame/${id}`}>
      <div className='container'>
        <h2>{name}</h2>
        {genres.map(el=>(<h4>{el.name}</h4> ))}
        <img src={background_image} alt="img not found" width="200px" height="250px"></img>
        </div>
        </Link>
    );
  }
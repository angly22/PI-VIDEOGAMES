import React from "react";
import { Link } from "react-router-dom";
import './Card.css'
// eslint-disable-next-line
export default function Card({
  id,
  background_image,
  name,
  genres,
  rating,
  released,
}) {
  
  return (
    <div className="cartascontenedor">
      <h2 className="nombre">{name}</h2>

      {genres.map((el) => (
        <div className="genero">{el.name}</div>
      ))}
      <img
        className="foto"
        src={background_image}
        alt="img not found"
        width="200px"
        height="200px"
      ></img>
      <br />
      <Link to={`/videogame/${id}`}>
        {" "}
        <button className="details">About</button>{" "}
      </Link>
    </div>
  );
}

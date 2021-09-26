import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getNameVideogames } from "../../actions/action";


export default function SearchBar({onSearch}) {
  const dispatch= useDispatch();
  const [name, setName] = useState(" "); // " " limpio mi input cuando renderizo

  function handlerInput(e){// me guardo en mi estado local lo que me entra por el input
    e.preventDefault()
    setName(e.target.value) //agarro lo que me llega por el input
    console.log(name) // mi estado local
  } 
  function handlerButton(e){// me guardo en mi estado local lo que me entra por el input
    e.preventDefault()
    dispatch(getNameVideogames(name)) //recibe el name y lo va a ir guardando en el estado local name
 // le llega a mi accion con el dispatch, llama al back y le pasa lo que le da el usuario
  }
  return (
    
    <div>
      <input 
        type="text"
        placeholder="Videogame's Name" 
        value={name}
        onChange={(e) =>handlerInput(e)}
      />
      <button type="submit" onClick={(e) =>handlerButton(e)}>Search</button>
      
    </div>
  );
}
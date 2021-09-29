import React, { useState, useEffect } from "react"; // los hooks a utilizar de react
import {useDispatch,useSelector} from'react-redux' // los hooks a utilizar de react-redux
import {getGenres, getVideogames,FILTER_CREATE,FILTER_RATING,ABC_FILTER,FILTER_GENRE } from "../../actions/action";
import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Paginado from "../Paginado/Paginado";
import './Home.css'
import SearchBar from "../SearchBar/SearchBar";
import CreateVideo from "../CreateVideo/CreateVideo";
import platforms from "../../img-array/platforms";
export default function Home() {
  

    const dispatch = useDispatch() // con esto despacho mis acciones
    const allgames = useSelector((state) => state.videogames) //traeme en esta constante todo lo que esta en el estado de videogames(en el reducer)
    const genres = useSelector((state) => state.genero)
    // PAGINADO-------------------

    const[orden,setOrdenado]=useState('')
    const [currentPage,setCurrentPage]= useState(1) // estado local (PAGINA INICIAL)
    const [gamesPage,setGamesPage]=useState(15) //setea los personajes por pagina este estado local me setea 15 personajes
    const indexLastGamePage= currentPage * gamesPage// pagina actual * cant. de game por pagina, en la primera pagina index=14
    const indexFirstGamePage= indexLastGamePage - gamesPage //indice del ultimo game - los game por pagina, 0
    const currentGames= allgames.slice(indexFirstGamePage,indexLastGamePage) // el arreglo del estado games, que viene del reducer, le aplica un slice, le paso el indice del primero y el ultimo personaje
    
    const paginado =(numberPage)=>{  // esta constante me renderiza en el front
    setCurrentPage(numberPage)
    }

useEffect (()=>{ //nos traemos del estado los videojuegos cuando el componente se monta co useEfect
    dispatch(getVideogames())
    dispatch(getGenres()) // es lo mismo que mapsdispatch
},[dispatch])// se pone arreglo vacio/dispatch para que no se haga un loop infinito

function handleClick(e){
    e.preventDefault();// evita que se refresque la pagina es preventivo, xq si tengo un useffect los estados se vuelven a cargar
    dispatch(getVideogames())//me despache la accion y resetea todo y me trae todo de nuevo
}

function handlerFilterCreate(e) {
    dispatch(FILTER_CREATE(e.target.value))// lo que viene del select(payload)
}
function handlerFilterRating(e) {
    e.preventDefault();
    dispatch(FILTER_RATING(e.target.value))// lo que viene del select(payload)
    setCurrentPage(1);                  //seteo para que empiece en la paina 1
    setOrdenado(`Ordenado ${e.target.value}`)
}
function handlerFilterGenres(e) {
    dispatch(FILTER_GENRE(e.target.value))// lo que viene del select(payload)
    }
function handlerSortAbece(e) {
    e.preventDefault();
    dispatch(ABC_FILTER(e.target.value))//despacho la accion
    setCurrentPage(1);                  //seteo para que empiece en la paina 1
    setOrdenado(`Ordenado ${e.target.value}`)// me modifique el estado local y se renderice si no no hace nada en el front
}

return (
  <div className="home">
   <div className="create"> <Link to="/videogames">CREATE A GAME</Link></div>
   <div className="inicio"> <Link to="/" >GO Back</Link></div>
   <div className="title"><p>FIND YOUR VIDEOGAME</p></div >
    <button className="render"
      onClick={(e) => {
        handleClick(e);
      }}
    >
      All Games
    </button>
    <div className="all-select">
<div className="A" >
      <select onChange={(e) => handlerFilterCreate(e)} >
        <option value="All">Create by</option>
        <option value="create">For me</option>
        <option value="developers">Developers</option>
      </select>
</div>
<div className="B">
      <select onChange={(e) => handlerSortAbece(e)}   >
        <option value="A To z">A To z</option>{" "}
        {/* se pone siempre value para poder acceder y preguntar si tengo opciones, si el value es ascendente hace esto */}
        <option value="Z To a">Z To a</option>
      </select>
</div>
<div className="C">
      <select onChange={(e) => handlerFilterRating(e)} >
        <option value="All">Rating</option>
        <option value="Better Rating">Better Rating</option>{" "}
        {/* se pone siempre value para poder acceder y preguntar si tengo opciones, si el value es ascendente hace esto */}
        <option value="Worse Rating">Worse Rating</option>
      </select>
      </div>
      <div className="D">
      <select onChange={(e) => handlerFilterGenres(e)} >
        <option value="All">Genres</option>
        {genres.map((el) => (
          <option value={el.name}>{el.name}</option>
        ))}
    </select>
    </div>
    </div>
      
      <SearchBar />
      <Paginado
        gamesPage={gamesPage}
        allgames={allgames.length}
        paginado={paginado}
      />
      <div  className="cartas">
        {currentGames?.map((el) => {
          //mapeo el estado global
          return (
            <>
              <Card
                id={el.id}
                background_image={el.background_image}
                name={el.name} //aqui me traigo solos los componentes que ya tengo destruct. en el componente card
                genres={el.genres}
                key={el.id}
              />
            </>
          );
        })}
      </div>
      
    
  </div>
);
};



import React, { useEffect } from "react"; // los hooks a utilizar de react
import {useDispatch,useSelector} from'react-redux' // los hooks a utilizar de react-redux
import { Link} from "react-router-dom";
import {getDetail} from "../../actions/action";
import  './Detaisl.css'

export default function Details(props) {
    console.log(props)
    const dispatch = useDispatch()


    useEffect(()=>{
        dispatch(getDetail(props.match.params.id)) // accedo al id de este detalle
    },[dispatch]);


    const gameDetail=useSelector((state)=>state.detail)// 
    console.log (gameDetail)
    return(
        <div>
             <Link to='/home'>
                     <button className="buttonhome">Go Home</button>
                </Link>
            {
                gameDetail.name?
                <div className="detail">
                  <div className="titleDetails"><p>{gameDetail.name}</p></div>
                  <div className="imgDetails"> <img src={gameDetail.background_image} width="300" height="400"  alt="" /></div>
                  <div className="aboDetails">  <p className="pDetails"> { !gameDetail.create?   gameDetail.description.replace(/(<([^>]+)>)/ig, ''):   gameDetail.description}</p> </div>        

                <div> <h3>Released Date:{gameDetail.released}</h3></div>
                  <div>  <h3>Rating: {gameDetail?.rating}</h3></div>
                  
                  <ul>  <li>Genres:</li>{!gameDetail.create?   gameDetail.genres.map(el=> <li>{el}</li>) : gameDetail.genres.map(el=> <li>{el.name}</li> )    }</ul>
                    {gameDetail.platforms?.length>0 && 
                    <ul> <li>Platforms:</li>{!gameDetail?.platforms?.create?      gameDetail.platforms.map(el=><li>{el}</li>):gameDetail.platforms.map(el=> <li>{el.name}</li> ) }</ul>}
                    </div>
                    :null
            }
           
 </div>)}

import React, { useEffect } from "react"; // los hooks a utilizar de react
import {useDispatch,useSelector} from'react-redux' // los hooks a utilizar de react-redux
import { Link} from "react-router-dom";
import {getDetail} from "../../actions/action";


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
                     <button>Go Home</button>
                </Link>
            {
                gameDetail.name?
                <div>
                    <h1>{gameDetail.name}</h1>
                    <img src={gameDetail.background_image} width="300" height="500"  alt="" />
                    <h6>Released Date:{gameDetail.released}</h6>
                    <h5>Rating: {gameDetail?.rating}</h5>
                    <p>About: { !gameDetail.create?   gameDetail.description.replace(/(<([^>]+)>)/ig, ''):   gameDetail.description}</p>         
                    <h3>Genres:{!gameDetail.create?   gameDetail.genres.map(el=> el) : gameDetail.genres.map(el=> el.name)    }</h3>
                    {gameDetail.platforms?.length>0 && 
                     <h3>Platforms:{!gameDetail?.platforms?.create?      gameDetail.platforms.map(el=> el):gameDetail.platforms }</h3>

                    }
                    
                    
                
                    </div>
                    :null

            }
               

            </div>
)}

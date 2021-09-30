import React, { useState, useEffect } from "react"; // los hooks a utilizar de react
import {useDispatch,useSelector} from'react-redux' // los hooks a utilizar de react-redux
import { Link} from "react-router-dom";
import {postVideogame,getGenres} from "../../actions/action";
import axios from "axios";
import './CreateVideo.css'
const platforms= require  ("../../img-array/platforms.json");
// ---------------------FUNCION DE VALIDACION DE ERRORES------------------------------------//
function validate(input) {
    let errors={}
    if(!input.name) { // si no esta el nombre
      errors.name =('The name is required'); // mando error
    }else if(!input.description){
        errors.description =('Description is required');
    }else if(!input.rating){
        errors.rating =('Rating is required');
    } return errors
  }

  // -----------------------------FORMULARIO CONTROLADO------------------------------------//

export default function CreateVideo() {
    const dispatch = useDispatch()
    const genero= useSelector((state)=> state.genero)// me traigo los generos
    const [errors, setErrors] = useState('');
    const [input,setInput]=useState({
        name:"",
        description:"",
        released:"",
        rating:"",
        genres:[],
        platforms:[]
    })

    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch]);

    function handleChange(e){ // cada vez que se cambie o se modifiquen mis imputs
        setInput({// seteame el estado
        ...input,  // ademas de lo que ya tiene agregale
        [e.target.name] : e.target.value// lo que me llega pr name          
        }) 
        setErrors(validate({ // seteame el errors y pasale la funcion validadora
            ...input, [e.target.name]: e. target.value
        }))
         console.log(input)
    }

    
    function handleSelect(e){ // cada vez que se cambie o se modifiquen mis imputs
        setInput({// seteame el estado
        ...input,  // ademas de lo que ya tiene agregale
        genres : [...input.genres,e.target.value]// guardame en un arreglo         
        })        //es como un push              //lo que ya habia y despues lo que me llega x el value
    }

    function handleSelectPlat(e){ 
        setInput({
        ...input,  
        platforms : [...input.platforms,e.target.value]        
        })      
    }

    async function handleSubmit(e){ // cada vez que se cambie o se modifiquen mis imputs
        try {
            e.preventDefault(e); // no se refresca
        console.log(input)
        var responsePost = await axios.post("http://localhost:3001/videogame",input);//quiero en esta ruta hacer el post del payload
        //console.log(responsePost)
        setInput({
            name:"",
            description:"",
            released:"",
            rating:"",
            genres:[],
            platforms:[]
        })
       // return responsePost
      ///dispatch(postVideogame(input)) // despacho mi accion a traves del inpuit
        alert("Videogame Successfully Created ")
        } catch (error) {
            alert("Videogame don't successfully created")
        }
    }       
    
    return(
        <>
        
        <Link to='/home'><button className="buttonbb">Go Home</button></Link> 
        <div className="mario"> <img 
        src='https://i.pinimg.com/originals/d9/7d/f9/d97df91ae1a4516dbdff9dba36f299bc.gif'
        width="100px"
        height="150px"></img></div>
        <div className="padreform">
            <h1 className="tituloC">Create  Your Videgames</h1>
            <form className="formulario" onSubmit={(e)=> handleSubmit(e)}>
                <div> 
                <input className="texto" placeholder="Enter videogame's name"
                type="text"
                name="name"
                required="required"
                value={input.name} 
                onChange={(e)=> handleChange(e)}
                />
                {errors.name && (
                    <p className='error'>{errors.name}</p>
                )}
                </div>

                <div> 
                <input  className="TextoDescript" placeholder="Describe videogame's you"
                type="text"
                name="description"
                required="required"
                value={input.description}
                onChange={(e)=> handleChange(e)} 
                />
                
                
                </div>
                
                <div> 
                <input className="texto" placeholder="Date created it"
                type="text" 
                name="released"
                required="required"
                value={input.released} // lo que me llega por el input
                
                onChange={(e)=> handleChange(e)}
                />
                </div>
                
                <div> 
                <input className="texto" placeholder="Rating  1-10"
                min="1" max="10"
                type="number" 
                name="rating"
                required="required"
                value={input.rating} // lo que me llega por el input
                onChange={(e)=> handleChange(e)}
                />
                </div>
                <div>
                  {/* este select si lo pungo multiple no me renderiza */}
                <select className="select" onChange={(e)=> handleSelect(e)} required="required" >
                    <option>Genres</option> 
                {genero.map((gen)=>(
                    <option value={gen.id}>{gen.name}</option>
                ))}
                </select>
                </div>

                <div>
                  {/* este select si lo pungo multiple no me renderiza */}
                <select className="select" onChange={(e)=> handleSelectPlat(e)} > 
                <option>Platforms</option>
                {platforms.map((pla)=>(
                    <option value={pla.name}>{pla.name}</option>
                ))}
                </select>
                </div>
                
                <button className="crear" type="submit" >Create</button>
               
           </form>
        </div>
        </>
    )


}
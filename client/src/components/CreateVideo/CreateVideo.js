import React, { useState, useEffect } from "react"; // los hooks a utilizar de react
import {useDispatch,useSelector} from'react-redux' // los hooks a utilizar de react-redux
import { Link} from "react-router-dom";
import {postVideogame,getGenres} from "../../actions/action";


// ---------------------FUNCION DE VALIDACION DE ERRORES------------------------------------//
function validate(input) {
    let errors={}
    if(!input.name) { // si no esta el nombre
      errors.name =('The name is required'); // mando error
    }else if(!input.description){
        errors.description =('Description is required');
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
        date_release:"",
        rating:"",
        platforms:[],
        genres:[]
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

    function handleSubmit(e){ // cada vez que se cambie o se modifiquen mis imputs
        e.preventDefault(e); // no se refresca
        console.log(input)
        dispatch(postVideogame(input)) // despacho mi accion a traves del inpuit
        alert("Videogame Successfully Created ")     // se creo con exito     
        }       
    
    return(
        <div>
            <Link to='/home'><button>Go Home</button></Link> {/*melleva al home xq esta redireciionando con el link*/}
            <h1>Create  Your Videgames</h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <div> 
                <label>Name:</label>
                <input placeholder="Enter videogame's name"
                type="text"
                name="name"
                value={input.name} 
                onChange={(e)=> handleChange(e)}
                />
                {errors.name && (
                    <p className='error'>{errors.name}</p>
                )}
                </div>

                <div> 
                <label>Description:</label>
                <input placeholder="Describe videogame's you"
                type="text"
                name="description"
                value={input.description}
                onChange={(e)=> handleChange(e)} 
                />
                </div>
                
                <div> 
                <label>Date of release:</label>
                <input placeholder="Date  created it"
                type="text" 
                // step="0.01" min="1.00" y max="10.00"
                name="date_release"
                value={input.date_release} // lo que me llega por el input
                // className={errors.username && "danger"}
                onChange={(e)=> handleChange(e)}
                />
                </div>
                
                <div> 
                <label>Rating:</label>
                <input placeholder="1.00 to 10.00"
                type="number" 
                name="rating"
                value={input.rating} // lo que me llega por el input
                onChange={(e)=> handleChange(e)}
                />
                </div>
                  {/* este select si lo pungo multiple no me renderiza */}
                <select onChange={(e)=> handleSelect(e)} > 
                {genero.map((gen)=>(
                    <option value={gen.id}>{gen.name}</option>

                ))}
                </select>
                <button type="submit" >Create</button>
           </form>
        </div>
    )





}
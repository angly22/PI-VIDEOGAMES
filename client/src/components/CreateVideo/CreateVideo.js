import React, { useState, useEffect } from "react"; // los hooks a utilizar de react
import {useDispatch,useSelector} from'react-redux' // los hooks a utilizar de react-redux
import { Link,useHistory } from "react-router-dom";
import {postVideogame,getGenres} from "../../actions/action";

export default function CreateVideo() {
    const dispatch = useDispatch()
    const genero= useSelector((state)=> state.genres)// me traigo los generos
    //const [error, setError] = useState('');
    const [input,setInput]=useState({
        name:"",
        description:"",
        date_release:"",
        rating:"",
       // platforms:[],
        genres:[]
    })

    useEffect(()=>{
        dispatch(getGenres())
    },[dispatch]);

    return(
        <div>
            <Link to='/home'><button>Go Home</button></Link> {/*melleva al home xq esta redireciionando con el link*/}
            <h1>Create  Your Videgames</h1>
            <form>
                <div> 
                <label>Name:</label>
                <input placeholder="Enter videogame's name"
                type="text"
                name="name"
                value={input.name} 
                />
                </div>

                <div> 
                <label>Description:</label>
                <input placeholder="Describe videogame's you"
                type="text"
                name="Description"
                value={input.description} 
                />
                </div>
                
                <div> 
                <label>Date of release:</label>
                <input placeholder="Date  created it"
                type="date"
                name="date_release"
                
                value={input.date_release} // lo que me llega por el input
                // className={errors.username && "danger"}
                />
                </div>
                
                <div> 
                <label>Rating:</label>
                <input placeholder="1.00 to 10.00"
                type="number" step="0.01" min="1.00" y max="10.00"
                name="rating"
                
                value={input.rating} // lo que me llega por el input
                // className={errors.username && "danger"}
                />
                </div>
                  
                <select>
                {genero.map((gen)=>(
                    <option value={genero.name}>{genero.name}</option>

                ))}
                </select>
           </form>
        </div>
    )





}
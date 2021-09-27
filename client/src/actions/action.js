import axios from "axios";

//conexion front - back /videogames
export function getVideogames() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/videogames");
    return dispatch({
      type: "GET-VIDEOGAMES",
      payload: json.data,
    });
  };
}


//conexion front - back /videogames
export function FILTER_CREATE(payload) {
  console.log(payload)
  return{
    type: 'FILTER_CREATE',//mismo nombre en el reducer
    payload //action.payload en el reducer
  }
  
}

export function FILTER_GENRE(payload) {
  console.log(payload)
  return{
    type: 'FILTER_GENRE',//mismo nombre en el reducer
    payload //action.payload en el reducer
  }
  
}



export function FILTER_RATING(payload) {
  console.log(payload)
  return{
    type: 'FILTER_RATING',//mismo nombre en el reducer
    payload //action.payload en el reducer
  }
}


export function ABC_FILTER(payload) {
  console.log(payload)
  return{
    type: 'ABC_FILTER',//mismo nombre en el reducer
    payload //action.payload en el reducer
  }
}

export function getNameVideogames(name) {
  console.log(name)
     return  async function (dispatch){
       try {
         var json= await axios.get ('http://localhost:3001/videogames?name='+ name)
         return  dispatch({
           type: "GET-NAME-VIDEOGAMES",
           payload: json.data
         })
       } catch (error) {
         console.log (error)
       }
     }
 
  }


export function getGenres(payload) {
  return async function (dispatch) {
    var infoGenre = await axios.get("http://localhost:3001/genres");
    console.log(infoGenre)

    return dispatch({type: "GET-GENRE",payload: infoGenre.data});
  };
}

export function getDetail(id) {
  try {
    return async function (dispatch) {
      var infoId = await axios.get("http://localhost:3001/videogame/" + id);
      console.log(infoId)
  
      return dispatch({
        type: "GET-DETAILS",
      payload: infoId.data});
    };
    
  } catch (error) {
    console.log(error);
  }
}




export function postVideogame(payload) {
  console.log(payload)
  return async function (dispatch) {// axios.post xq es un post y no un get
    var responsePost = await axios.post("http://localhost:3001/videogame",payload);//quiero en esta ruta hacer el post del payload
    console.log(responsePost)
    return responsePost
  }
}
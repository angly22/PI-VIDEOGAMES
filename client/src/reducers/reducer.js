const initialState = {
  //state
  videogames: [],
  filter1: [], // mi estado inicial es un arreglo vacio
  genero:[],
  detail:[]
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "GET-VIDEOGAMES":
      return {  // me llena el estado con todo , puedo tener miles de estados
        ...state,
        videogames: action.payload, // a mi stado inicial, mandale todo lo que tenga la accion get videogames
        filter1: action.payload,
        genero:action.payload,
        //detail:action.payload
      };

      case "GET-NAME-VIDEOGAMES":
        return{
          ...state,
          videogames:action.payload
        }

        case "GET-GENRE": // solo devuelve el estado como esta, xq solo se crea en otra ruta
        return{
          ...state,
          genero:action.payload
        }

        case "GET-DETAILS": // solo devuelve el estado como esta, xq solo se crea en otra ruta
        return{
          ...state,
          detail:action.payload
        }




    case "FILTER_CREATE":
      const allgames = state.filter1;
      const filterCreate =
        action.payload === "All"? allgames : allgames.filter((el) => {
              if (!el.create && action.payload === "developers") {
                return true;
              }
              return el.create === action.payload;
            });
      if (filterCreate.length === 0) {alert(`There are no games created by in the selected option`);}
      return {
        ...state,
        videogames: filterCreate,
      };

    
    case "ABC_FILTER":
  
        let orderAbc= action.payload === "A To z"?

         state.videogames.sort((a, b) => {
           if(a.name > b.name) return 1
           if(b.name > a.name) return -1
              return 0
            }):

            state.videogames.sort((a, b) => {
              if(a.name > b.name) return -1
              if(b.name > a.name) return 1
                 return 0
               })
        return {
          ...state,
          videogames:orderAbc
        };
        

        
        case "FILTER_RATING":
  
        let orderRating= action.payload === "Worse Rating"?

         state.videogames.sort((a, b) => {
           if(a.rating > b.rating) return 1
           if(b.rating > a.rating) return -1
              return 0
            }):

            state.videogames.sort((a, b) => {
              if(a.rating > b.rating) return -1
              if(b.rating > a.rating) return 1
                 return 0
               })
        return {
          ...state,
          videogames:orderRating
        };
       




        case "POST-VIDEOGAME": // solo devuelve el estado como esta, xq solo se crea en otra ruta
          return{
            ...state
          }

   default:
  return state;
}
}


// case'FILTER_GENRE': // mismo nombre de la action
// const allVideogames= state.videogames
// const FilterGenre= action.payload === 'All' ? allVideogames : allVideogames.filter(el=>el.genres === action.payload)
// return{
//     ...state, // concatenamos el estado anterior, xq si tenemos varios estados debe modificar solo el estado completo no todos
//     videogames: statusFilterGenre

// }

export default rootReducer;

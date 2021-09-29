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
        detail:action.payload
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

  
      case "FILTER_GENRE":
        const allGenresFilter = state.filter1;
        let filterGenre = action.payload === "All"? allGenresFilter : allGenresFilter.filter((el) => {
          //console.log(el.genres)
                  let aux1= el.genres
                  for (let j of aux1) {
                    //console.log(  element.name === action.payload)
                    if (j.name === action.payload) return true
                  }return false
                })
                if (filterGenre.length === 0) {
                  alert(`No ${action.payload} games found`)
                  filterGenre = state.videogames
                }return {
                  ...state,
                  videogames: filterGenre,
                };
        
               

        
    case "ABC_FILTER":
  
        let orderAbc= action.payload === "A To z"?

         state.videogames.sort((a, b) => {
           if(a.name.toUpperCase() > b.name.toUpperCase()) return 1
           if(b.name.toUpperCase() > a.name.toUpperCase()) return -1
              return 0
            }):

            state.videogames.sort((a, b) => {
              if(a.name.toUpperCase() > b.name.toUpperCase()) return -1
              if(b.name.toUpperCase() > a.name.toUpperCase()) return 1
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


export default rootReducer;

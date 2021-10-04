import React from "react";
import './Paginado.css'


export default function paginado({gamesPage,allgames,paginado}) {
const [currentPage,setCurrentPage]= useState(1) // estado local (PAGINA INICIAL)
const [gamesPage,setGamesPage]=useState(15) //setea los personajes por pagina este estado local me setea 15 personajes


const numberPage=[]
// recorro un arreglo donde tomo el numero redondeado
for (let i = 0; i < Math.ceil(allgames/gamesPage); i++) { // me redondea todos los juegos por la cantidad de juegos por p
   numberPage.push(i+1) // lo pusheo en mi number page, que resulta un arreglo de numeros
}

//const[orden,setOrdenado]=useState('')

const indexLastGamePage= currentPage * gamesPage// pagina actual * cant. de game por pagina, en la primera pagina index=14
const indexFirstGamePage= indexLastGamePage - gamesPage //indice del ultimo game - los game por pagina, 0
const currentGames= allgames.slice(indexFirstGamePage,indexLastGamePage) // el arreglo del estado games, que viene del reducer, le aplica un slice, le paso el indice del primero y el ultimo personaje


const renderPageNumbers = numberPage && numberPage.map(number=>{
   if(number<maxPageNumeberLimit+1 && number>minPageNumberLimit){
       return(
        <li className ='number' key={number}
        className={currentPage=== number? "active" : null}
        >
        <button onClick={(e)=>paginado(number)}>{number}
        </button>
        </li>
       )
   }else {
       return null;
   }
})

return(// aqui renderizo los numero
<nav>
    <ul className ='paginado'>
    {renderPageNumbers}

    <button onClick={(e)=>paginado(number-1)}>PREV</button>

    <li>
    <button onClick={(e)=>paginado(number+1)}>NETX</button>
    </li>
        {/* {numberPage &&
        numberPage.map(number=>(
            
            <li className ='number' key={number}>
            
            <button onClick={(e)=>paginado(number)}>{number}</button>
            </li>
            
        ))} */}
    </ul>
</nav>
)

}

import React, { useState } from "react";
2
3  function usePagination({gamesPage,allgames,paginado}) {
4    const [currentPage, setCurrentPage] = useState(1);
5    const maxPage = Math.ceil(all.length / gamesPage);//7
6
7  function currentData() {
8    const begin = (currentPage - 1) * gamesPage;  //0
9    const end = begin + gamesPage;   //15
10   return allgames.slice(begin, end);
11  }
12
13  function next() {
14    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
15  }
16
17  function prev() {
18    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
19  }
20
21  function jump(page) {
22    const numberPage = Math.max(1, page);
23    setCurrentPage((currentPage) => Math.min(numberPage, maxPage));
24  }
25
26  return { next, prev, jump, currentData, currentPage, maxPage };
27 }
28
29 export default usePagination;
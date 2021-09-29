import React from "react";
import './Paginado.css'
export default function paginado({gamesPage,allgames,paginado}) {
const numberPage=[]

// recorro un arreglo donde tomo el numero redondeado
for (let i = 0; i < Math.ceil(allgames/gamesPage); i++) { // me redondea todos los juegos por la cantidad de juegos por p
   numberPage.push(i+1) // lo pusheo en mi number page, que resulta un arreglo de numeros
    
}
return(// aqui renderizo los numero
<nav>
    <ul className ='paginado'>
        {numberPage &&
        numberPage.map(number=>(
            
            <li className ='number' key={number}>
            <button onClick={(e)=>paginado(number)}>{number}</button>
            </li>
            
        ))}
    </ul>
</nav>
)

}
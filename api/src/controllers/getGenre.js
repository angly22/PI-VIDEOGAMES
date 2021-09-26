// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var axios = require('axios');
const { Router } = require('express');
var express = require('express');
//const { where } = require('sequelize/types');
require('dotenv').config();
const {APIKEY}=process.env
const {Videogame,Genre,Op} = require('../db.js')

const router = Router();
const url=`https://api.rawg.io/api/`
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// GET Genre
// const getGenre= async (req,res)=>{ 
  
//     const genreApi = await axios.get(`${url}genres?key=${APIKEY}`)// va a la api
//     const genres = genreApi.data.results.map(el=>el.name) //mapea la info de la api
//     genres.forEach(el => { 
//         Genre.findOrCreate({ // creame en model genre lo que me viene por el forEach
//             where:{ name:el}
//         })
//     })
//     const allGenre= await Genre.findAll(); console.log(genres) // guardame todas las ocupaciones en el modelo
//     res.send(allGenre)
   
//     };
const getGenre= async (req,res)=>{ 
  
    
    const allGenre= await Genre.findAll();  // guardame todas las ocupaciones en el modelo
    res.send(allGenre)
   
    };
    module.exports={getGenre}
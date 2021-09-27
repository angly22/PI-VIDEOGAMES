// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
// var axios = require('axios');
// const { Router } = require('express');
// var express = require('express');
// const { where } = require('sequelize/types');
// require('dotenv').config();
// const {APIKEY}=process.env
// const {Videogame,Genre,Op} = require('../db.js')

// const router = Router();
// const url=`https://api.rawg.io/api/`
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// const getGames= async (req,res)=>{ // debe esperar a que se carge toda la info antes de renderizar algo
//     let games=[] 
//     let page=1
//     while (games.length<100) {
        
//         let response= await axios.get(`${url}games?key=${APIKEY}&page=${page}`) // await
//         response.data.results.map(element => { // capturo la rspuesta xq es asincrono
//             games.push( //push each game's object into the array but with only name, img and genres properties.
//                         Object.keys(element).reduce(function(obj, k) {
//                         if (k==='id' || k === 'background_image' || k === 'name' ||k === 'genres' || k==='rating' ||
//                         k==='released' || k==='description' || k==='platforms'
//                          ) obj[k] = element[k];
//                         return obj;
//                 }, {}))
//         })
//         page++
//             } 
//     return games
    
// };




// GET Genre
// const getGenre= async (req,res)=>{ 
//     let platforms=[]
//     const response = await axios.get(`${url}games?key=${APIKEY}`) // await// va a la api
//          response.data.results.forEach(el=>{
//              el.name) //mapea la info de la api
   
//     const allGenre= await Genre.findAll(); console.log(genres) // guardame todas las ocupaciones en el modelo
//     res.send(allGenre)
   
//     };
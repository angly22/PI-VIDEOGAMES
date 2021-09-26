// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var axios = require('axios');
const e = require('express');
const { Router } = require('express');
var express = require('express');
//const { where } = require('sequelize/types');
require('dotenv').config();
const {APIKEY}=process.env
const {Videogame,Genre} = require('../db.js')

const router = Router();
const url=`https://api.rawg.io/api/`
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


// GET/videogames    // GET videogames?name=
// me traigo la info de la api 
const getGames= async (req,res)=>{ // debe esperar a que se carge toda la info antes de renderizar algo
    let games=[] 
    let page=1
    while (games.length<100) {
        
        let response= await axios.get(`${url}games?key=${APIKEY}&page=${page}`) // await
        response.data.results.map(element => { // capturo la rspuesta xq es asincrono
            games.push( //push each game's object into the array but with only name, img and genres properties.
                        Object.keys(element).reduce(function(obj, k) {
                        if (k==='id' || k === 'background_image' || k === 'name' ||k === 'genres' || k==='rating'
                         ) obj[k] = element[k];
                        return obj;
                }, {}))
        })
        page++
            } 
    return games
    
};
 
 //me traigo la info de la bd

 const getDB= async ()=>{
    return await Videogame.findAll({include: Genre})
 };

 //concateno las dos infos obtenidas
 const getAll= async(req,res)=>{
    const gamesApi= await getGames();
    const gamesDB= await getDB();
    const gamesFull=(gamesDB.concat(gamesApi))
      return gamesFull
 };



// GET VIDEOGAMES/?NAME='...'
const getAllGameName= async (req,res)=>{
    let name=req.query.name
    let gamesDB= await getDB()
    let page_size=15
    let array=[]
    let response = await axios.get(`${url}games?search=${name}&search_precise=true&key=${APIKEY}&page_size=${page_size}`)
    response.data.results.map(el=>(
        array.push(  Object.keys(el).reduce(function(obj, k) {
                      if ( k==='id' ||k === 'background_image' || k === 'name' ||k === 'genres' || k==='date_release'
                         ) obj[k] = el[k];
                         return obj;
                     }, {}))) )
     //console.log(array)
    let gamesNameDB= await gamesDB.filter(el=> el.name.toLowerCase().includes(name.toLowerCase()))
     
   
    totalGamesName= (gamesNameDB.concat(array))
    //totalGamesName.length>0?
     return totalGamesName
  

}

    
    module.exports={getAll,getAllGameName}
   


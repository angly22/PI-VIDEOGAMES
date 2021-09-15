// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var axios = require('axios');
const { Router } = require('express');
var express = require('express');
require('dotenv').config();
const {APIKEY}=process.env
const {Videogames,Gender,getAllGames} = require('../db')


//const {Videogames}= require('../db') // aqui me traigo el modelo desde db
const router = Router();
const url=`https://api.rawg.io/api/games?key=${APIKEY}`
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports={
 getGames: async (req,res)=>{
    let games=[] 
    while (games.length<100) {
        let page=1
        let response= await axios.get(`${url}&page=${page}`)
        response.data.results.map(element => { // capturo la rspuesta xq es asincrono
            games.push( //push each game's object into the array but with only name, img and genres properties.
                        Object.keys(element).reduce(function(obj, k) {
                        if (k === 'name' || k === 'background_image' || k === 'genres') obj[k] = element[k];
                        return obj;
                }, {}))
        })
        page++
    }res.json(games)
 },


 getDB: async ()=>{
    return await Videogames.findAll({
         include:Gender
    })
 },

 getAllGames: async()=>{
return await (getGames.concat(getDB))
 }
}
 
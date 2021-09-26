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


 // POST / videogame

 const gamePost= async (req,res)=>{ 
    try {
        const { name, description,released, rating, platforms, genres} = req.body
    console.log(name)
        const [ videogame, created ] = await Videogame.findOrCreate({
            where:{
                name, 
                
            }, 
            defaults:{
                description,
                released,
                rating,
                platforms,
            }
        })
            
        await videogame.setGenres(genres)
        
        res.send (created? `success: new videogame created`:`el juego already exist in DB`)
         
    } catch (error) {
        let message = {msg: `${error} in post Game`}
        res.send(message)         
    }// me traigo todo lo que necesito por body
}
module.exports={gamePost}
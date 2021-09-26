// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var axios = require('axios');
const { Router } = require('express');
var express = require('express');
require('dotenv').config();
const {getGameID}= require('../controllers/getGamesID.js');
const {getGenre}= require('../controllers/getGenre.js');
const {gamePost}= require('../controllers/postGame.js');
const {getAll,getAllGameName}= require('../controllers/getAllGames');
//var router = express.Router();
//router.use(express.json());

const {Videogame}= require('../db') // aqui me traigo el modelo desde db
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
 
//GET VIDEOGAMES      VIDEOGAMES/?NAME='...'c
router.get('/videogames', async (req,res)=>{
    try {
        let response = req.query.name?await getAllGameName(req) : await getAll()
        if(response.length === 0) throw new Error('no found')
        res.send(response)
    } catch (error) {
        let message = {msg: `${error} fallo el get `}
        res.send(message)
    }
}) 


//GET VIDEOGAMES    VIDEOGAMES/{idVideogame}'...'
router.get('/videogame/:id',getGameID) 

//GET GENRES
router.get('/genres' ,getGenre) 

//POST /videogames
router.post('/videogame' ,gamePost)


module.exports=router;



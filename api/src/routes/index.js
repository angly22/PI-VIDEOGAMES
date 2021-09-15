// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var axios = require('axios');
const { Router } = require('express');
var express = require('express');
require('dotenv').config();
const {getGames}= require('../controllers/getGames.js')
//var router = express.Router();
//router.use(express.json());

//const {Videogames}= require('../db') // aqui me traigo el modelo desde db
const router = Router();
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/videogames',getGames) 
console.log(getGames)

module.exports = router;

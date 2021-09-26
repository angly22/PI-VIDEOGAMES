// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
var axios = require('axios');
const { Router } = require('express');
var express = require('express');
require('dotenv').config();
const {APIKEY}=process.env
const {Videogame,Genre,Op} = require('../db.js')

const router = Router();
const url=`https://api.rawg.io/api/`



// GET videogames/:id
const getGameID= async (req,res)=>{
    try {
  const idVideoG=req.params.id
  if (idVideoG.length>=36){
  let gameID= await Videogame.findOne({ // busca uno en mi modelo videogame
      where:{id:idVideoG},
      include:[{model:Genre}]
  })
  aux=gameID.dataValues
       res.status(200).send(aux) 
       
    }//res.status(404).send('The searched video cannot be found on our website')
   // console.log(idVideoG)
    else  if (idVideoG.length>0 || idVideoG.length< 36){
        console.log("entra")
        let response = await axios.get(`${url}games/${idVideoG}?key=${APIKEY}`),
        //{id,name,description,date_release,rating,platforms,genres}=response.data

        gameDetails={
            id : response.data.id,
            name:response.data.name,
            description:response.data.description,
            date_release:response.data.date_release,
            rating:response.data.rating,
            platforms : response.data.platforms.map(elm=>elm.platform.name),
            genres :response.data.genres.map(el=>el.name)
            
        }
        //console.log(response)
        res.status(200).send(gameDetails) 
     }
  }catch (error) {
      let message = {msg: `${error} fallo el get id`}
      res.send(message)         
  }
}

module.exports={getGameID}
 
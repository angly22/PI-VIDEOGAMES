//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Videogame} = require('./src/db.js')

// Syncing all the models at once.
conn.sync({ force: true }).then(() => { //  SI ESTA EN TRUE SE BORRA CADA QUE RENDERIZO
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  })})
// ELIMINAR SOLO SON DATOS DE PRUEBA

  //   var mario = Videogame.create({
  //     name:"mario",
  //     description:"este es un juego genial",
  //     platforms:"xbox",
  //     genres:"Adventure",
  //   });

  //   var circus = Videogame.create({
  //     description:"este jueo es divertido",
  //     name:"mcircus",
  //     platforms:"play",
  //     genres:"Action",
  //   });

  //   var hunter = Videogame.create({
  //     description:"este juego me gusta",
  //     name:"hunter",
  //     platforms:"xbox",
  //     genre:"Action",
  //   });
  
  




  //   Promise.all([hunter,mario,circus])
  //   .then(res=>{
  //     console.log("juegos precargados")
  //   })
  // })})

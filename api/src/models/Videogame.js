const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
      allowNull: false,
      //UNIQUE:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date_release: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    create:{
      type:DataTypes.STRING,
      allowNull:false,
      defaultValue:"create"
    },
    background_image:{
      type: DataTypes.TEXT,
      validate: { isUrl: true },
      defaultValue: 'https://wiki.p-insurgence.com/images/0/09/722.png'      
    },
  },
  {
    timestamps:false
  }
  );
};

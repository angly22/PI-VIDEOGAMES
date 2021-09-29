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
    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
      
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING
    },
    rating: {
      type: DataTypes.FLOAT
    },
    platforms: {
      type: DataTypes.JSON,
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
      defaultValue: 'https://i.gifer.com/fCG.gif'      
    },
  },
  {
    timestamps:false
  }
  );
};

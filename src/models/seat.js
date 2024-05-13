'use strict';
const {
  Model
} = require('sequelize');

const {enumValues} = require('../utils/common')

const {BUISNESS,PREMIUM_ECONOMY,FIRST_CLASS,ECONOMY} = enumValues.enumstrings

module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
      })
    }
  }
  Seat.init({
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    row: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    col: {
      type:DataTypes.STRING,
      allowNull:false
    },
    type: {
      type:DataTypes.ENUM,
      values:[BUISNESS,PREMIUM_ECONOMY,FIRST_CLASS,ECONOMY],
      defaultValue:ECONOMY,
      allowNull:false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};
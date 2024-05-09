'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Airplane,{
        foreignKey:'airplaneId',
        onDelete:'CASCADE',
      }),
      this.belongsTo(models.Airport,{
        foreignKey:'arrivalAirportId',
        onDelete:'CASCADE',
      }),
      this.belongsTo(models.Airport,{
        foreignKey:'departureAirportId',
        onDelete:'CASCADE',
      })
    }
  }
  Flight.init({
    flightNumber: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    airplaneId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    arrivalAirportId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    departureAirportId: {
      type:DataTypes.STRING,
      allowNull:false
    },
    arrivalTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    departureTime: {
      type:DataTypes.DATE,
      allowNull:false
    },
    totalSeats: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    price: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    boardingGate: {
      type:DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};
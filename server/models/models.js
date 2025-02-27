const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Project = sequelize.define('project', {
  id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
  name: {type: DataTypes.STRING, unique: true, allowNull: false},
  description: {type: DataTypes.STRING, unique: false, allowNull: false},
  img: {type: DataTypes.STRING, allowNull: true},
})

module.exports = {
  Project,
}
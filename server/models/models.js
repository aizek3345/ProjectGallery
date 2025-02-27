const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Project = sequelize.define('project', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING},
    description: {type: DataTypes.STRING},
    img: {type: DataTypes.STRING}
})

module.exports = {
    Project
}
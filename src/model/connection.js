require('dotenv').config()
const dbConfig = require('./config')
const Sequelize = require('sequelize')
const{DataTypes} = require('sequelize')

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD,{
    host : dbConfig.HOST,
    dialect : dbConfig.DIALECT,
    port : dbConfig.PORT,
    define:{
        timestamps:false
    }
})

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize

db.users = require('./familyModel') (sequelize,Sequelize)
db.asets = require('./asetModel') (sequelize,Sequelize)

// relation
db.users.hasMany(db.asets,{
    foreignKey:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false
    }
})
db.asets.belongsTo(db.users)

module.exports = db
const {DataTypes} = require('sequelize')

module.exports = (sequelize) =>{
    const User = sequelize.define('user', {
        id:{
            type:DataTypes.UUID,
            allowNull:false,
            primaryKey:true,
            defaultValue:DataTypes.UUIDV4
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:false
        },
        status:{
            type:DataTypes.STRING,
            allowNull:false
        },
        assetValue:{
            type:DataTypes.INTEGER,
            allowNull:true
        }
    })
return User
}
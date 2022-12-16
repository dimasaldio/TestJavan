const {DataTypes} = require('sequelize')

module.exports = (sequelize)=>{
    const Aset = sequelize.define('asets', {
        id:{
            type:DataTypes.UUID,
            defaultValue:DataTypes.UUIDV4,
            allowNull:false,
            primaryKey:true
        },
        owner:{
            type:DataTypes.STRING,
            allowNull:false
        },
        aset:{
            type:DataTypes.STRING,
            allowNull:false
        },
        price:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })
    return Aset
}
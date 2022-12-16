require('dotenv').config()
const express = require('express')
const app = express()
const db = require('./src/model/connection')
const router = require('./src/routes/index')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
db.sequelize.sync()

app.use(router)

app.listen(process.env.PORT, ()=>{
    try {
        console.log(`sukses terhubung ke ${process.env.PORT}`)
    } catch (error) {
        console.log(error)
    }
})
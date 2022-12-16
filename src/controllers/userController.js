const db = require('../model/connection')
const User = db.users
const Aset = db.asets
const _ = require('lodash')
const axios = require('axios')
const { response } = require('express')

class familyController{

// check family
    async checkFamily(req,res,next){
        try {
            const user = await User.findOne({where:{name:_.startCase(req.params.familyName)}})
            if(!user){
                return res.status(400).json({message:'user family is not found'})
            }
            next()
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error check family, check log'})
        }
    }

// check aset
    async checkAset(req,res,next){
        try {
            const aset = await Aset.findOne({where:{id:req.params.asetID}})
            if(!aset){
                return res.status(400).json({message:'aset is not found'})
            }
            next()
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error check aset, check log'})
        }
    }

// add family

    async addFamily(req,res){
        try {
            await User.create({
                name : _.startCase(req.body.name),
                gender : _.startCase(req.body.gender),
                status : _.startCase(req.body.status) 
            })

            res.status(200).json({message:'success add family'})
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error add family, check log'})
        }
    }

// update family

    async updateFamily(req,res){
        try {
            await User.update({
                name : _.startCase(req.body.name),
                gender : _.startCase(req.body.gender),
                status : _.startCase(req.body.status) 
            }, {where:{name:_.startCase(req.params.familyName)}})
            res.status(200).json({message:'success update family'})
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error update user family, check log'})
        }
    }

// delete family

    async deleteFamily(req,res){
        try {
            await User.destroy({where:{name:_.startCase(req.params.familyName)}})
            res.status(200).json({message:'success delete family'})
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error delete family, check log'})
        }
    }

// add aset family

    async addAset(req,res, next){
        try {
            const user = await User.findOne({raw:true, where:{name:_.startCase(req.params.familyName)}})
            const response = await axios.get(`https://dummyjson.com/products/search?q=${req.body.aset}`)

            await Aset.create({
                userId : user.id,
                owner : _.startCase(user.name),
                aset : _.startCase(req.body.aset),
                price : response.data.products.map(x=>{return x.price})
            })
            next()
            
    } catch (error) {
            console.log(error)
            res.status(400).json({message:'error add asset, check log'})
        }
    }
// update aset family

    async updateAset(req,res,next){
        try {
            const response = await axios.get(`https://dummyjson.com/products/search?q=${req.body.aset}`)
            await Aset.update({aset : _.startCase(req.body.aset), price : response.data.products.map(x=>{return x.price})}, {where:{id:req.params.asetID, owner:_.startCase(req.params.familyName)}})
            
            next()
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error update aset, check log'})
        }
    }

// delete aset family

    async deleteAset(req,res,next){
        try {
            await Aset.destroy({where:{id:req.params.asetID, owner:_.startCase(req.params.familyName)}})
            
            next()
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error delete aset, check log'})
        }
    }

// update totalValues user family

    async updateValues(req,res){
        try {
            const aset = await Aset.findAll({raw:true, where:{owner:_.startCase(req.params.familyName)}})
            let total = 0
            for(let i = 0; i < aset.map(x=>{return x.price}).length; i++){
                total += aset.map(x=>{return x.price})[i]
            }

            await User.update({assetValue:total}, {where:{name:_.startCase(req.params.familyName)}})
            
            res.status(200).json({
                message:'success modify asset',
                data:aset
            })
        } catch (error) {
            console.log(error)
            res.status(400).json({message:'error modify aset, check log'})
        }
    }
}

module.exports = new familyController()
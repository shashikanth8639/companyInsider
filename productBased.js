const express = require('express')

const Company = require('../models/company')

const router = express.Router()

router.get('/productBased', async(req,res)=>{
    const companies = await Company.find({isProductBased:true})
    // console.log(companies)
    try{
        res.send(companies)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/pBased', async(req,res)=>{
    try{
        const company = await Company.find({isProductBased:true}, {_id:1,imageLink:1,name:1})
        // console.log(company)
        if(!company){
            return res.status(404).send()
        }
        res.send(company)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/productBased/:id', async(req,res)=>{
    try{
        const company = await Company.findOne({_id:req.params.id})
        if(!company){
            return res.status(404).send()
        }
        res.send(company)
    }catch(e){
        res.status(500).send(e)
    }
})

module.exports = router
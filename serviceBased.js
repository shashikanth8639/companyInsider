const express = require('express')

const Company = require('../models/company')

const router = express.Router()

router.get('/serviceBased', async(req,res)=>{
    const companies = await Company.find({isProductBased:false})
    try{
        res.send(companies)
    }catch(e){
        res.status(500).send(e)
    }
})


router.get('/sBased', async(req,res)=>{
    try{
        const company = await Company.find({isProductBased:false}, {_id:1,imageLink:1,name:1})
        if(!company){
            return res.status(404).send()
        }
        res.send(company)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/serviceBased/:id', async(req,res)=>{
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
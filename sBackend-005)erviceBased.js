// code for service based routes

router.get('/serviceBased', async(req,res)=>{
    const companies = await Company.find({isProductBased:false})
    try{
        res.send(companies)
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

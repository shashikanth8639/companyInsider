//code for routes 

router.post('/companies', async(req,res)=>{
    const company = new Company(req.body)
    try{
        await company.save()
        res.status(201).send(task)
    }
    catch(e){
        res.status(400).send(e)
    }
})
router.get('/company/:id', async(req,res)=>{
    try{
        const company = await Company.findOne({_id:req.params.id})
        // console.log(company)
        if(!company){
            return res.status(404).send()
        }
        res.send(company)
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/lander', async(req,res)=>{
    const companies = await Company.aggregate([
                        { $sample: { size: 8 } },
                        { $project: { name:1, imageLink:1 } }
                        ])
    res.send(companies)
})

router.get('/searchList/:id', async(req,res)=>{
    try{
        const name = req.params.id.toUpperCase()
        const companies = await Company.find({name},{name:1, imageLink:1})
        console.log(companies)
        if(companies.length==0){
            console.log('hahah')
            const m = Math.min(name.length,2)
            const cname = name.substring(0,m)
            console.log(cname)
            const _companies = await Company.find({name: { $regex: "^"+cname}}, {name:1, imageLink:1})
            if(!_companies){
                return res.status(404).send()
            }else{
                res.send(_companies)
            }
        }else{
            res.send(companies)
        }
    }catch(e){
        res.status(500).send(e)
    }
})

router.get('/companies', async(req,res)=>{
    const companies = await Company.find({})
    res.send(companies)
})
)



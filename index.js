const express = require('express')
const mongoose = require('./db/mongoose')
const rating = require('./rating')
//routers
const router = require('./routers/router')
const productRouter = require('./routers/productBased')
const serviceRouter = require('./routers/serviceBased')
const cors = require('cors')

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

app.use(router)
app.use(productRouter)
app.use(serviceRouter)
app.use(rating)

app.listen(port, ()=>{
    console.log('server started on port '+port)
})
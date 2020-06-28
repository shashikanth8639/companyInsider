//mogoose database model for company storage in mogodb
const mongoose = require('mongoose')

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String,
        trim: true,
        required: true
    },
    keyPeople: {
        type: Object,
        required: true
    },
    headQuarters:{
        type: String,
        trim: true,
        required: true
    },
    achievements:{
        type: Array
    },
    companyLink:{
        type: String
    },
    careersLink:{
        type: String
    },
    prepLinks:{
        type: Array
    },
    interviewExperience: {
        type: Array
    },
    views:{
        type: Number,
        required: true
    },
    ranking:{
        type: Number,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    revenue: {
        type: String
    },
    reviewLinks: {
        type: String,
        required: true
    },
    imageLink: {
        type: String,
        required: true
    },
    isProductBased:{
        type: Boolean,
        required: true
    },
    search: {
        type: String,
        required: true
    }
})

const Company = mongoose.model('Company', companySchema)

module.exports = Company

const express = require('express')

const { router } = require('./routes')

require('dotenv').config()

const mongoose = require('mongoose')

if (require.main === module) {
    // Connect to database MONGODB
    mongoose
        .set('strictQuery', false)
        .connect(process.env.DB_URI)
        .then(() => {
            console.log('DB Connection Successfull!!!')
        })
        .catch((err) => {
            console.log(err)
        })
}
const app = express()

app.use(express.json())

app.use(router)

module.exports.app = app

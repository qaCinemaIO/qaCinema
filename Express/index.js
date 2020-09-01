const express = require("express");
const mongoose = require("mongoose");
const url = 'mongodb://localhost/MovieDB'

const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const movieRouter = require('./movies')
app.use('/movies', movieRouter)



app.listen(8009, () => {
    console.log('Server started')
})
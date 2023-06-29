const express = require('express')
const serverless = require('serverless-http')
var bodyParser = require('body-parser');

const app = express('')
const cors = require('cors')
const mongoose = require('mongoose')

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ limit: '50mb',extended: false,parameterLimit:50000 }));
app.use(bodyParser.json({limit: '50mb'}));

mongoose.connect('mongodb+srv://chandrakiranreddykovvuri:kiran@cluster0.1g1by8b.mongodb.net/test')
    .then((res) => {
        console.log('connected to database')
    }).catch(err => console.log(err))


app.use('/', require('./routes/Route'))

// app.get('/details',(req,res)=>{
//     console.log("aaa");
//     console.log('ss')
//     res.send(res.json());
//     // console.log('sent')
// })

app.listen(3001, () => {
    console.log('server connected')
})

module.exports = app
module.exports.handler = serverless(app)
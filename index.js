require('node:dns/promises').setServers(['1.1.1.1','8.8.8.8']);
const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')
const mongodbConnection = require('./config/MongodbConection')
// middlewere
app.use(express.json())

// frontend connect with cors
app.use(cors())
// db connection 
mongodbConnection()

// routes
app.get('/', (req, res) => {
    res.send('Render working');
});

// server create
const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`server is running on ${port}` )
})
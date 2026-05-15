const mongoose = require('mongoose')

const mongoConnection = ()=>{
   return mongoose.connect('mongodb+srv://Single_Vendor_User:XCtr7NFDFj1vEpcb@cluster0.xeyfzz5.mongodb.net/Single_Vendor_DB?appName=Cluster0').then(()=>{
    console.log('mongodb connected')
   }).catch((err)=>{
    console.log('mongodb connection error',err)
   })
}

module.exports = mongoConnection
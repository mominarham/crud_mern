const express = require('express');
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://mominarham2345:momin@123@cluster0.7rc5c.mongodb.net/note-crud?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
    useFindAndModify:false,
}).then(()=>{
    console.log('db connectd')
}).catch(()=>{
    console.log(' fail hua connection')
})


app.use('/',require('./routes/Routes'))


app.listen(3001,(req,res)=>{
    console.log('running')
})
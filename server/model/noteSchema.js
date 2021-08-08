const mongoose = require('mongoose')

const noteSchema ={
    title:String,
    content : String
}

const Note = mongoose.model('noteA',noteSchema) 

module.exports = Note;
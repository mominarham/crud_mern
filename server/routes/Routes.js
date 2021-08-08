const express = require('express')
const router = express.Router()
const Note = require('../model/noteSchema')

router.route('/create').post((req,res)=>{
       const title =req.body.title
       const content = req.body.content
       const newNote = new Note({
           title,
           content
       })
       newNote.save()

})

router.route('/notes').get((req,res)=>{
    Note.find()
    .then(foundNotes=>res.json(foundNotes))
})
router.route('/delete/:id').delete((req,res)=>{
    const id = req.params.id
    Note.findByIdAndDelete({_id:id},(req,res,err)=>{
        if(!err){
            console.log(' item deleted')
        }else{
            console.log(' delete fail ')
        }
    })

    
})

router.route('/put/:id').put((req,res)=>{
    const updatedItem = {
        title: req.body.title,
        content: req.body.content
    }
    Note.findByIdAndUpdate({_id:req.params.id},{$set : updatedItem},(req,res,err)=>{
        if(!err){
            console.log('item updated ')
        }else{
            console.log('update fail hua')
        }
    }).catch(err=> console.log(err))
})

module.exports = router
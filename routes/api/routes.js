const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()

const item=require('../../model/schema')
//GET route
router.get('/',function(req,res){
    item.find()
    .then(items=>res.json(items))
})

//POST route
router.post('/',function(req,res){
    const newItem=new item({
        name:req.body.name
    });
    newItem.save().then(item=>res.json(item))
})
//DELETE route
router.delete('/:id',function(req,res){
    item.findById(req.params.id)
    .then(item=>item.remove().then(res.send("Data removed successfully")))
})
module.exports=router
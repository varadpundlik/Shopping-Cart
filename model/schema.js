const mongoose=require("mongoose")

const itemSchema={
    name:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
}

item=mongoose.model('item',itemSchema);

module.exports=item;
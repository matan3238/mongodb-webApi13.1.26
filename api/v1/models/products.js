const mongoose=require('mongoose');//קישור לספריית מונגוס
// ניצור סכימה-שזה מבנה עבור מוצר
const Schema=new mongoose.Schema({
    pid:Number,
    price:Number,
    pname:String
});
module.exports=mongoose.model('products',Schema);
const mongoose=require('mongoose');//קישור לספריית מונגוס
// ניצור סכימה-שזה מבנה עבור מוצר
const Schema=new mongoose.Schema({
    pid:Number,
    price:Number,
    pname:String
});
const Product=mongoose.model('products',Schema);
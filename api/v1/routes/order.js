const express=require('express');// ייבוא מודול אקספרס  
const router=express.Router();// יצירת ראוטר חדש לניהול ניתובים
//נגדיר ניתובים עבור היישות הזמנה
router.get('/',(req,res)=>{
    res.status(200).json({msg:`Get all orders`});
});// טיפול בבקשות GET לנתיב /order שליפת כל ההזמנות
router.post('/',(req,res)=>{
     res.status(200).json({msg:`Add New order`});
});// טיפול בבקשות POST לנתיב /order הוספת הזמנה חדש
router.get('/:id',(req,res)=>{
     res.status(200).json({msg:`Get order By Id ${req.params.id}`});
});// טיפול בבקשות GET לנתיב /order/:id שליפת הזמנה לפי מזהה
router.put('/:id',(req,res)=>{
    res.status(200).json({msg:`Update order By Id ${req.params.id}`});
});// טיפול בבקשות PUT לנתיב /order/:id עדכון הזמנה קיים לפי מזהה
router.delete('/:id',(req,res)=>{
    res.status(200).json({msg:`Delete order By Id ${req.params.id}`});
});// טיפול בבקשות DELETE לנתיב /order/:id מחיקת הזמנה לפי מזהה

module.exports=router;// ייצוא הראוטר החוצה לשימוש בקבצים אחרים 

const express=require('express');// חיבור לספריית אקספרס שמאפשרת ניהול שרתי אינטרנט
// const productController=require('../controllers/product');
const {getALLProduct,
    addNewProduct,
    getproductbyid,
    updateProductById,
    deleteProductById
}=require('../controllers/products');// ייבוא ישיר של הפונקציות מהקונטרולר
const router=express.Router();// יצירת ראוטר חדש לניהול ניתובים
//נגדיר ניתובים עבור היישות מוצר
router.get('/',getALLProduct);// טיפול בבקשות GET לנתיב /product שליפת כל המוצרים
router.post('/',addNewProduct);// טיפול בבקשות POST לנתיב /product הוספת מוצר חדש
router.get('/:id',getproductbyid);// טיפול בבקשות GET לנתיב /product/:id שליפת מוצר לפי מזהה
router.put('/:id',updateProductById);// טיפול בבקשות PUT לנתיב /product/:id עדכון מוצר קיים לפי מזהה
router.delete('/:id',deleteProductById);// טיפול בבקשות DELETE לנתיב /product/:id מחיקת מוצר לפי מזהה

module.exports=router;// ייצוא הראוטר החוצה לשימוש בקבצים אחרים
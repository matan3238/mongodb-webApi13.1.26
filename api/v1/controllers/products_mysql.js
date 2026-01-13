// const mongoose=require('mongoose');//קישור לספריית מונגוס
const products=require('../models/products');
const mysqlDb=require('../modules/mySql');
let obj={
    getAllProducts:(req,res)=>{
        let sql="select * from t_product";
        connection.promise().query(sql).then((results)=>{
        return res.status(200).json(results[0]);
        // מבצעים חיפוש של כל המוצרים בטבלת מוצרים ומדפיסים אותם
        });
},
getProductById:(req,res)=>{
   const id=req.params.id;//שמירת הפרמטר איידי שנשלח לנקודת קצהבתוך משתנה איידי
let sql=`select * from t_product where pid=${id}`;
   connection.promise().query(sql).then((results)=>{

   return res.status(200).json(results[0]);
   });
},
updateProductById:(req,res)=>{
const id=req.params.id;//שמירת הפרמטר איידי שנשלח לנקודת הקצה בתוך משתנה בשם איידי
const prod=req.body;//שמירת הבודי בתוך משתנה בשם פרוד
let sql=`delete t_product set pname='${prod.pname}',price=${prod.price}where pid=${id}`;
connection.promise().query(sql).then((results)=>{
  return res.status(200).json(results[0]);
});
},
deleteProductById:(req,res)=>{
   const pid=req.params.id;
      let sql=`delete from t_products where pid=${id}`;
      connection.promise().query(sql).then((results)=>{
   return res.status(200).json(results[0]);
      });
},
addNewProduct:(req,res)=>{
// const id=req.params.id;//שמירת הפרמטר איידי שנשלח לנקודת הקצה בתוך משתנה בשם איידי
const prod=req.body;//שמירת הבודי בתוך משתנה בשם פרוד
// let sql=`insert into t_product(pname,price,pdesc,picname)values(;
// sql+=`'${prod.name}',${prod.price},${prod.pdesc},${prod.picname}`;
        let sql=`insert into t_product (pname,price,pdesc,picname) VALUES ('${prod.pname}',${prod.price},'${prod.pdesc}','${prod.picname}')`;
connection.promise().query(sql).then((results)=>{
  return res.status(200).json(results[0]);
            });
        }  
};
module.exports=obj;


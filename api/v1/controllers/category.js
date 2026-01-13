// const mongoose=require('mongoose');//קישור לספריית מונגוס
const category=require('../models/category');
//חיבור לבסיס נתונים מסוג mysql
var mysql = require('mysql2');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'matan',
    password: 'Matan323@',
    database: 'ecommdb'
});
connection.connect((err) => {
    if (err == null)
        console.log('Good My Sql Connection');
    else
        console.log(err);
});
let obj={
    getAllcategory:(req,res)=>{
        let sql="select * from t_category";
        connection.promise().query(sql).then((results)=>{
      
        return res.status(200).json(results[0]);
        // מבצעים חיפוש של כל המוצרים בטבלת מוצרים ומדפיסים אותם
        });
},
getcategoryById:(req,res)=>{
   const id=req.params.id;//שמירת הפרמטר איידי שנשלח לנקודת קצהבתוך משתנה איידי
let sql=`select * from t_category where pid=${id}`;
   connection.promise().query(sql).then((results)=>{

   return res.status(200).json(results[0]);
   });
},
updatecategoryById:(req,res)=>{
const id=req.params.id;//שמירת הפרמטר איידי שנשלח לנקודת הקצה בתוך משתנה בשם איידי
const prod=req.body;//שמירת הבודי בתוך משתנה בשם פרוד
let sql=`delete t_category set pname='${prod.pname}',price=${prod.price}where pid=${id}`;
connection.promise().query(sql).then((results)=>{
  return res.status(200).json(results[0]);
});
},
deletecategoryById:(req,res)=>{
   const pid=req.params.id;
      let sql=`delete from t_category where pid=${id}`;
      connection.promise().query(sql).then((results)=>{
   return res.status(200).json(results[0]);
      });
},
addNewcategory:(req,res)=>{
// const id=req.params.id;//שמירת הפרמטר איידי שנשלח לנקודת הקצה בתוך משתנה בשם איידי
const prod=req.body;//שמירת הבודי בתוך משתנה בשם פרוד
// let sql=`insert into t_product(pname,price,pdesc,picname)values(;
// sql+=`'${prod.name}',${prod.price},${prod.pdesc},${prod.picname}`;
        let sql=`insert into t_category (pname,price,pdesc,picname) VALUES ('${prod.pname}',${prod.price},'${prod.pdesc}','${prod.picname}')`;
connection.promise().query(sql).then((results)=>{
  return res.status(200).json(results[0]);
            });
        }  
};
module.exports=obj;


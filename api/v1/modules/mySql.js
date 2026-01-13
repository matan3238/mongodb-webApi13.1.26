const { connection } = require('mongoose');
const mysql=require('mysql2');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'matan',
//     password: 'Matan323@',
//     database: 'ecommdb'

// });
// MYSQL_USER=matan
// MYSQL_PASS=matan123
// MYSQL_SERVER=localhost
// MYSQL_DB=ecommdb

const pool =mysql.createPool({//יצירת אובייקט של מספר חיבורים לבסיס הנתונים, בדומה לרכזיה עם מספר קווים
        host: process.env.MYSQL_SERVER,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    waitForConnections:true,
    connectionLimit:10,
    queueLimit:0
});

module.exports=pool;
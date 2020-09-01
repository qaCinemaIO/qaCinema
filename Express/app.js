// let express = require("express");
// let mysql = require("mysql");
// let app = express();

// let connection = mysql.createConnection({

//     host: 'localhost',
//     user: 'root',
//     password: '22945',
//     database: 'gamedb'
// });

// app.get('/viewAll', function(req, resp){
//     connection.query("Select * from customers", function(error, rows, fields) {
//         if(!!error) {
//             console.log('Error in query');
//         }else {
//             console.log('SUCESS\n');
//             console.log(rows);
//         }
        
//     });
// })

// // app.get('/readid/{id}', function(req, resp, id){
// //     connection.query("Select * from customers where id = ? ", id, function (error, resp){
// //         if(!!error) {
// //             console.log('Error in query');
// //             result(error, null);
// //         }else {
// //             console.log('SUCESS\n');
// //             console.log(rows);
// //             result(null, resp)
// //         }
        
// //     });
// // })








// connection.connect(function(error){
//     if(!!error) {
//         console.log('Error');
//     }else {
//         console.log('Connected');
//     }
// });

// app.listen(8009)
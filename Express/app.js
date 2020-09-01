let express = require("express");
let mysql = require("mysql");
let app = express();

let connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: '22945',
    database: 'gamedb'
});

app.get('/viewAll', function(req, resp){
    connection.query("Select * from customers", function(error, rows, fields) {
        if(!!error) {
            console.log('Error in query');
        }else {
            console.log('SUCESS\n');
            resp.send(rows);
        }
        
    });
})

app.get('/readid/:id', function(req, resp){
    connection.query(`Select * from customers where id = ${req.params.id} `, function (error, rows){
        if(!!error) {
            console.log('Error in query');
        
        }else {
            console.log('SUCESS\n');
            resp.json(rows);
            
        }
        
    });
})



connection.connect(function(error){
    if(!!error) {
        console.log('Error');
    }else {
        console.log('Connected');
    }
});

app.listen(9007)
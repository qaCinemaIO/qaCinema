const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({

    host: '35.197.233.32',
    user: 'root',
    password: 'team-io-rules',
    database: 'qa_cinemas'

// Databases
//qa_cinemas         
//qa_cinemas_test    
//qa_cinemas_test2
});

mysqlConnection.connect((err)=> {
    if (!err)
    console.log('connected');
    else 
    console.log('connection failed\n Error : ' + JSON.stringify(err, undefined, 2));
});

// view all records
app.get('/viewAll', (req,res)=>{
    mysqlConnection.query('SELECT * FROM customers', (err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err)
    })
});

// view record by id
app.get('/customer/:id', (req,res)=>{
    mysqlConnection.query('SELECT * FROM customers WHERE id = ?',[req.params.id], (err, rows, fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err); 
    })
});

// delete a record
app.delete('/delete/:id', (req,res)=>{
    mysqlConnection.query('DELETE FROM orderline WHERE id = ?',[req.params.id], (err, rows, fields)=>{
        if(!err)
        res.send('delete successful.');
        else
        console.log(err);
    })
});


// create record 
  app.post('/create', (req,res)=>{

    const { firstname } = req.body;
    const { surname } = req.body;
    const { address } = req.body;
    const { email } = req.body;
    const { mobile } = req.body;

    mysqlConnection.query(`INSERT INTO customers(firstname, surname, address, email, mobile) VALUE (?, ?, ?, ?, ?)`, [firstname, surname, address, email, mobile], (err, rows, fields)=>{
        if(!err)
        res.send('record created.');
        else
        console.log(err);
    })
});



//update record
app.patch('/update/:id', (req,res)=>{

    const { firstname } = req.body;
    const { surname } = req.body;
    const { address } = req.body;
    const { email } = req.body;
    const { mobile } = req.body;
    
    
    mysqlConnection.query(`UPDATE customers SET firstname = ?, surname = ?, address = ?, email = ?, mobile = ? WHERE id = ${req.params.id}`, [firstname, surname, address, email, mobile], (err, rows, fields)=>{
        if(!err)
        res.send('record replaced.');
        else
        console.log(err);
    })
});




app.listen(9007, ()=>console.log('Express server running at port no : 9007'));

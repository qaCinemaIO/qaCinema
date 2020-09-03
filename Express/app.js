const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const CFB = exec("node contactformBackend.js");

CFB.stdout.on("data", data => {
    console.log(`stdout: ${data}`);
});

CFB.stderr.on("data", data => {
    console.log(`stderr: ${data}`);
});

CFB.on('error', (error) => {
    console.log(`error: ${error.message}`);
});

CFB.on("close", code => {
    console.log(`child process exited with code ${code}`);
});
app.use(bodyparser.json());
app.use(cors())
var mysqlConnection = mysql.createConnection({

    host: '35.197.233.32',
    user: 'root',
    password: 'team-io-rules',
    database: 'qa_cinemas2_test'

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
app.get('/info', (req,res)=>{
    mysqlConnection.query('select * from SEAT', (err, rows, fields)=>{
        if(!err)
        res.json(rows);
        else
        console.log(err); 
    })
});

app.get('/genres', (req,res)=>{
    mysqlConnection.query('select * from genres', (err, rows, fields)=>{
        if(!err)
        res.json(rows);
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

// add movie 
app.post('/addmovie', (req,res)=>{

    const { title } = req.body;
    const { synopsis } = req.body;
    const { director } = req.body;
    const { age_rating } = req.body;
    const { release_date } = req.body;
    const { duration_min } = req.body;
    const { writers } = req.body;
    const { fk_genre_id} = req.body;
    
    mysqlConnection.query(`INSERT INTO movies(title, synopsis, director, age_rating, release_date, writers, fk_genre_id, duration_min) VALUE (?, ?, ?, ?, ?, ?, ?, ?)`, [title, synopsis, director, age_rating, release_date, writers, fk_genre_id, duration_min], (err, rows, fields)=>{
        if(!err)
        res.send('record created.');
        else
        console.log(err);
    })
});

    
    
    
  























app.listen(9007, ()=>console.log('Express server running at port no : 9007'));

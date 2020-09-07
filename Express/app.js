const mysql = require('mysql');
const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const { exec } = require('child_process');
const CFB = exec("node contactformBackend.js");
const stripe = require("stripe")("sk_test_51HKitMDLu2BN2qWa15S3XzRFXU2AOWs6LTq50CE4vikfOi57H1uejca0VBXteQl1kC3g93B5CMGdSXQCUOfNNyGu00kHoJ63Nz");

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
    database: 'qa_cinemas2'

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
    mysqlConnection.query('select * from SCREENmorning', (err, rows, fields)=>{
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
app.get('/genres', (req,res)=>{
    mysqlConnection.query('select * from Genres', (err, rows, fields)=>{
        if(!err)
        res.json(rows);
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
    const { starring } = req.body;
    const { release_date } = req.body;
    const { duration_min } = req.body;
    const { writers } = req.body;
    const { fk_genre_id} = req.body;
    const { post_img_ref} = req.body;
    const { alt_txt} = req.body;
    

    mysqlConnection.query(`INSERT INTO Movies(title, synopsis, director, age_rating, release_date, writers, fk_genre_id, duration_min, post_img_ref, alt_txt) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`, [title, synopsis, director, age_rating, release_date, writers, fk_genre_id, duration_min, post_img_ref, alt_txt], (err, rows, fields)=>{

        if(!err){
        res.json({
            status: 'movie added'
          })
        }
        else {
        res.json({
            status: 'fail',
            error: err
          });
        }
    })
});
// view all movies
app.get('/viewAllmovies', (req,res)=>{
    mysqlConnection.query('SELECT * FROM Movies', (err, rows, fields)=>{
        if(!err){res.send(rows);}
        
        else {console.log(err)}
        
    })
});



//get movie by id 
app.get('/movie/:id', (req,res) => {
    mysqlConnection.query('SELECT m.title, m.synopsis, m.director, m.age_rating, m.starring, m.release_date, m.writers, g.genre_name, m.duration_min, m.post_img_ref, m.alt_txt from Movies m join genres g on m.fk_genre_id=g.idgenres', (err, rows, fields)=>{
    if(!err){res.send(rows);}
        
    else {console.log(err)}
    })
})
app.post("/checkout", async (req, res) => {
    console.log("Request:", req.body);

    let error;
    let status;
    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const idempotency_key = uuid();
        const charge = await stripe.charges.create(
            {
                amount: product.price * 100,
                currency: "usd",
                customer: customer.id,
                receipt_email: token.email,
                description: `Purchased the ${product.name}`,
                shipping: {
                    name: token.card.name,
                    address: {
                        line1: token.card.address_line1,
                        line2: token.card.address_line2,
                        city: token.card.address_city,
                        country: token.card.address_country,
                        postal_code: token.card.address_zip
                    }
                }
            },
            {
                idempotency_key
            }
        );
        console.log("Charge:", { charge });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "success";
    }

    res.json({ error, status });
});

app.listen(9007, ()=>console.log('Express server running at port no : 9007'));

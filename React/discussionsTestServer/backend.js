
var mysql=require('mysql');
let express=require("express");
let app=express();
const cors = require("cors");


app.use(cors());

app.get('/allPosts', (req, res) => {
    var connection = mysql.createConnection({
        host: '35.197.233.32',
        user: 'root',
        password: 'team-io-rules',
        database: 'qa_cinemas'
    })

    connection.connect()


    let query = ''
    if (req.query.userId !== undefined){
        query = `select * from posts where postedById NOT LIKE ${req.query.userId}`
    }
    else{
        query = `select * from posts`
    }
        connection.query(query, function (err, response) {
        if (err){
            console.log(err);
            res.json();
        }
        else{
            // console.log("proggggg "+ req.query.userId)
            res.json(response);
        }
    })
    connection.end()
})


app.get('/allMoviesPosts', (req, res) => {
    var connection = mysql.createConnection({
        host: '35.197.233.32',
        user: 'root',
        password: 'team-io-rules',
        database: 'qa_cinemas'
    })

    connection.connect()


    let query = ''
        query = `select title from movies;`

    connection.query(query, function (err, response) {
        if (err){
            console.log(err);
            res.json();
        }
        else{
            console.log("proggggg ")
            res.json(response);
        }
    })
    connection.end()
})


// create record
app.post('/createPost', (req,res)=>{
    var connection = mysql.createConnection({
        host: '35.197.233.32',
        user: 'root',
        password: 'team-io-rules',
        database: 'qa_cinemas'
    })

    connection.connect()

    let title = req.query.movie;
    let post = req.query.post;
    let rating = req.query.rating;
    let userId = req.query.userId;
    let username = req.query.username;


    connection.query(`INSERT INTO posts(postTitle, postContent, postRating, postedById, postedByName) VALUES ("${title}", "${post}", ${rating}, ${userId}, "${username}")`, (err, rows, fields)=>{
        if(!err) {
            res.send(res);
            console.log(res + "worrkerked");
        }
        else {
            console.log(err);
        }
    })
});


app.listen(8081)











// Create table statement////////////////////////////////////////////////////////////////
// create table posts(
//     postId INT auto_increment,
//     postTitle VARCHAR(50),
//     postContent VARCHAR(255),
//     postedByName VARCHAR(100),
//     postedByID INT,
//     primary key(postId)
// );
//
// create table comments(
//     commentId INT auto_increment,
//     postId INT,
//     commentContent VARCHAR(255),
//     commentByName VARCHAR(100),
//     commentByID INT,
//     primary key(commentId)
// );

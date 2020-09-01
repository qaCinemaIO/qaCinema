
var mysql=require('mysql');
let express=require("express");
let app=express();



app.get('/allPosts', (req, res) => {
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'tes'
    })

    connection.connect()

    connection.query('select * from posts', function (err, response) {
        if (err){
            console.log(err);
        }
        else{
            console.log("proggggg "+ req.query.userId)
            res.json(response);
        }




    })

    connection.end()
})




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

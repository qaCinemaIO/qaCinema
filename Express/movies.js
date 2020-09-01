// const express = require('express')
// const router = express.Router()
// const Movie = require('./models/movie')



// // view all records
// router.get('/', async(req, res) => {
//     try{
//         const movies = await Movie.find()
//         res.json(movies)
//     }catch(err){
//         res.send('Error ' + err)

//     }
// })

// // view record by id
// router.get('/:id', async(req, res) => {
//     try{
//         const movie = await Movie.findById(req.params.id)
//         res.json(movie)
//     }catch(err){
//         res.send('Error ' + err)

//     }
     
// })

// // update records  
// router.patch('/:id', async(req, res) => {
//     try{
//         const movie = await Movie.findById(req.params.id)
//         movie.name = req.body.name
//         movie.tech = req.body.tech
//         movie.released = req.body.released
//         const a1 = await movie.save()
//         res.json(a1)
//     }catch(err){
//         res.send('Error ' + err)

//     }
// })

// // delete record
// router.delete('/:id', async(req, res) => {
//     try{
//         const movie = await Movie.findById(req.params.id)
//         const a1 = await movie.remove()
//         res.json(a1)
//     }catch(err){
//         res.send('Error ' + err)

//     }
// })

// // create new record
// router.post('/', async(req, res) => {
//     const movie = new Movie({
//         name: req.body.name,
//         tech: req.body.tech,
//         released: req.body.released
//     })

//     try{
//         const a1 = await movie.save()
//         res.json(a1)
//     }catch(err){
//         res.send('Error')
//     }
    

// })



// // router.get('/info', (req, res) => { 
// //     var connection = mysql.createConnection({
// //       host: 'localhost',
// //       user: 'root',
// //       password: 'root',
// //       database: 'warhammer'
// //     })
     
//     // connection.connect()
     
//     // connection.query('select * from usermain', function (err, rows, fields) {
//     //   if (err) throw err
//     //   let test = [];
//     // for(let i = 0; i<rows.length;i++){
//     // test.push(rows[i]);
//     // }
//     // res.json(test);
//     // })
     
//     // connection.end()
//     // })






// module.exports = router
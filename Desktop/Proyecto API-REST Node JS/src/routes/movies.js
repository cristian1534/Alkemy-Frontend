const { Router } = require('express');
const router = Router();
const _= require('underscore'); //npm install underscore, para recorror los datos, lo uso en delete...
const movies = require('../routes/sample');



router.get('/', (req, res)=>{
    res.json(movies);
});

router.post('/', (req, res)=>{
    // console.log(req.body); // post en postman y me lo muestra en consola lo q recive

    const { title, director, year, rating} = req.body;

         if( title && director && year && rating){
             const id = movies.length + 1;
             const newMovie={
                 ...req.body, id
             };
            movies.push(newMovie);
            res.json(movies);

         }else{
             res.status(404).json({"error":"there was an error"})
         }

    res.send('received');
});

router.delete('/:id',(req, res)=>{

    const { id } = req.params;

    _.each(movies, (movie, i)=>{
        if(movie.id == id){
            movies.splice(i,1);
        }
    });
    res.send(movies);
});

router.put('/:id',(req, res)=>{
    const { id } = req.params;
    const { title, director, year, rating} = req.body;

    if( title && director && year && rating){
        _.each(movies, (movie, i)=>{
            if(movie.id == id){
                movie.title = title,
                movie.director = director,
                movie.year = year,
                movie.rating = rating
            }
        })
        res.json(movies);
    }else{
        res.status(500).json({"error":"there was an error."})
    }
    
});

module.exports = router;
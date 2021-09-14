const movies = require("./db.json")
let globalId = 11

module.exports = {
    getAllMovies: (req, res) => {
        res.status(200).send(movies);
    },
    deleteMovie: (req, res) => {
        const {id} = req.params
        let index = movies.findIndex(elm => elm.id === +id)
        movies.splice(index, 1)
        res.status(200).send(movies)
    },
    createMovie: (req, res) => {
        const {title, rating, imageURL} = req.body;
        let newMovie = {
            id: globalId,
            title,
            rating: +rating,
            imageURL
        }
        if(!title || !rating || !imageURL){
            return res.status(400).send('incomplete')
        } else {
            movies.push(newMovie);
            globalId++;
            res.status(200).send(movies);
        }
    },
    editMovie: (req, res) => {
        const {id} = req.params;
        const {type} = req.body;
        let index = movies.findIndex(m => m.id === +id);

        if(movies[index].rating === 5 && type === 'plus'){
            res.status(400).send('cannot go above 5')
        } else if (movies[index].rating === 1 && type === 'minus'){
            res.status(400).send('cannot be below 0');
        } else if (type === 'plus'){
            movies[index].rating++;
            res.status(200).send(movies);
        } else if (type === 'minus'){
            movies[index].rating--;
            res.status(200).send(movies);
        } else{
            res.sendStatus(400);
        }
    }
}
const cors = require('cors');
const express = require('express');

const app = express();
const ctrl = require('./controller.js')

app.use(express.json());
app.use(cors());

app.get('/api/movies', ctrl.getAllMovies);
app.delete('/api/movies/:id', ctrl.deleteMovie);
app.post('/api/movies', ctrl.createMovie);
app.put('/api/movies/:id', ctrl.editMovie);


const port =4004;
app.listen(port, console.log(`Merry Christmas, ya filthy animal ${port}`))
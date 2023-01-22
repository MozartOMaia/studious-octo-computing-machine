const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');



const app = express();

mongoose.connect('mongodb+srv://mozart:abcd1234@cluster0.hldiucm.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

app.use(express.json()); //precisa vir antes das rotas para ser aplicada nelas

app.use(routes); //rotas em arquivo separado


app.listen(3333);
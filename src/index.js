const express = require('express');
const mongoose = require('mongoose');
const db = require('./db')
const app = express();
app.use(express.json());

const product = require("./routes/product.routes");

app.use('/api/v1/products', product)

app.listen(3000, (req, res) => {
    console.log('Listening on port 3000');
});
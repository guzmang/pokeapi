'use strict'

const express = require('express');
const cors = require('cors');
const app = express();

// Loading routes files
const pokemon_routes = require('./routes/pokemon');

app.use(cors());

// Routes
app.use('/api', pokemon_routes);
app.use('/*', (req, res) => { res.status(404).send('Not found') });

// Exports
module.exports = app;
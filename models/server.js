require('../config/config');
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;

        this.pokemonPath = '/api';

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
    }

    middlewares() {
        // CORS
        this.app.use( cors() );
    }

    routes() {
        this.app.use( this.pokemonPath, require('../routes/pokemon'));
        this.app.use('/*', (req, res) => { res.status(404).send('Not found') });
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log(`Server correctly running on port ${ process.env.PORT }`);
        });
    }

}

module.exports = Server;
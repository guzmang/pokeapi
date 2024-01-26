'use strict'

const express = require('express');
const PokemonController = require('../controllers/pokemon');

const router = express.Router();

router.get('/:page', PokemonController.init);
router.get('/name/:name', PokemonController.searchByName);
router.get('/type/:type', PokemonController.searchByType);
router.get('/*', PokemonController.invalid);

module.exports = router;
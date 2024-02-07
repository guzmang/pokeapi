'use strict'

const express = require('express');
const PokemonController = require('../controllers/pokemon');
const { validateJWT } = require('../middlewares/validateJWT');

const router = express.Router();

router.get('/page/:page', [ validateJWT ], PokemonController.init);
router.get('/name/:name', [ validateJWT ], PokemonController.searchByName);
router.get('/type/:type', [ validateJWT ], PokemonController.searchByType);
router.get('/types',      [ validateJWT ], PokemonController.getTypes);
router.get('/*', PokemonController.invalid);

module.exports = router;
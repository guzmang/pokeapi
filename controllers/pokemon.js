'use strict'
const PokemonUtils = require('../utils/pokemonUtils')
const axios = require('axios');

const controller = {
    home: async function(req, res) {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0');
        return res.status(200).send(
            `Everything works fine. There are ${ response.data.count } pokemons!`
        );
    },

    init: async function(req, res) {


        console.log(req.params.page)
        const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ req.params.page * 10 }`);
        const urls = data.results.map(pokemon => pokemon.url);

        const response = await PokemonUtils.executeRequestsInOrder(urls);

        return res.status(200).send(
            //data.results
            response
        );
    },

    searchByName: async function(req, res) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`);
            return res.status(200).send(
                response.data
            )
        }
        catch(e) {
            return res.status(404).send(
                'Not found'
            )
        }
    },

    searchByType: async function(req, res) {
        try {
            const response = await axios.get(`https://pokeapi.co/api/v2/type/${req.params.type}`);
            return res.status(200).send(
                response.data.pokemon
            )
        }
        catch(e) {
            return res.status(404).send(
                'Not found'
            )
        }
    },

    invalid: function(req, res) {
        return res.status(404).send(
            'Not found'
        );
    }
}

module.exports = controller;
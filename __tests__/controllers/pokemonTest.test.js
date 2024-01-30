const axios = require('axios');
const app = require('../../app');

const { home, init, searchByName, searchByType, getTypes, invalid } = require('../../controllers/pokemon');

describe('GET operations from pokemon controller', () => {

    test('it should return a Pokemon page with status 200', async () => {
        const req = {
            params: {
                page: 1
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        const mockResponse1 = {
            data: {
                results: [
                    {
                        "name": "bulbasaur",
                        "url": "https://fake1.co/api/v2/pokemon/1/"
                    }
                ]
            }
        };
        const mockResponse2 = {
            data: {
                "id": 1,
                "name": "bulbasaur"
            }
        };

        jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse1);   // Simulates success response
        jest.spyOn(axios, 'get').mockResolvedValueOnce(mockResponse2);   // Simulates success response

        await init(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith([mockResponse2.data]);
    });

    test('it should return a status 404 with init', async () => {
        const req = {
            params: {
                page: 1
            }
        };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        
        // Simulate error using this operation (i.e. a request to external API)
        jest.spyOn(console, 'error').mockReturnValue();                         // Mock console.error() to avoid print console messages
        jest.spyOn(axios, 'get').mockRejectedValue(new Error('Fake error'));    // Throw error that simulates a failed operation

        await init(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith('Not found');
    });

    test('it should return a list of Pokemon types with status 200', async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        const mockResponse = [
            {
                "name": "normal",
                "url": "https://pokeapi.co/api/v2/type/1/"
            },
            {
                "name": "fighting",
                "url": "https://pokeapi.co/api/v2/type/2/"
            },
            {
                "name": "flying",
                "url": "https://pokeapi.co/api/v2/type/3/"
            },
        ]; // (There is more)

        jest.spyOn(axios, 'get').mockResolvedValue({ data: { results: mockResponse } });   // Simulates success response

        await getTypes(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.send).toHaveBeenCalled();
        expect(res.send).toHaveBeenCalledWith(mockResponse);
    });

    test('it should return a status 404 with getTypes', async () => {
        const req = {};
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };
        
        // Simulate error using this operation (i.e. a request to external API)
        jest.spyOn(console, 'error').mockReturnValue();                         // Mock console.error() to avoid print console messages
        jest.spyOn(axios, 'get').mockRejectedValue(new Error('Fake error'));    // Throw error that simulates a failed operation

        await getTypes(req, res);

        expect(res.status).toHaveBeenCalledWith(404);
        expect(res.send).toHaveBeenCalledWith('Not found');
    });

});
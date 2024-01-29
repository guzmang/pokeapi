## POKEAPI App

Welcome! This is an app that works as middleware to request the [PokeApi: ](https://pokeapi.co/).

Please clone the repository and don't forget execute the next command line to download the dependencies into the project:

```
npm install
```

The next step is start the server, so run:

```
node index
```

Once the server is up, you can make a GET request. The setting for the port is 3000. For example:

```
http://localhost:3000/api/
```

You will need to clone and run the front to have an UI:

```
https://github.com/guzmang/pokedex
```

## Endpoints

You can check these endpoints:

Get all types of Pokemon

```
http://localhost:3000/api/types
```

Get all Pokemons with a type:

```
http://localhost:3000/api/type/:option
```

Get 10 Pokemons per page:

```
http://localhost:3000/api/page/:page
```

Get a Pokemon by name or id

```
http://localhost:3000/api/name/:name
```
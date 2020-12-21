# COUPLE-API

![Last version](https://img.shields.io/github/v/tag/justalk/couple-api.svg?style=flat-square)
[![Travis](https://img.shields.io/travis/com/justalk/couple-api.svg?style=flat-square)](https://travis-ci.com/github/JustalK/couple-api)
[![Coverage Status](https://coveralls.io/repos/github/JustalK/COUPLE-API/badge.svg?branch=master)](https://coveralls.io/github/JustalK/COUPLE-API?branch=master)
[![Maintainability Status](https://api.codeclimate.com/v1/badges/83c64f45edc52d90dd9a/maintainability)](https://codeclimate.com/github/JustalK/COUPLE-API/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/83c64f45edc52d90dd9a/test_coverage)](https://codeclimate.com/github/JustalK/COUPLE-API/test_coverage)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)

This project is a game. The game is a simple and interactive quizz that will trigger discussion for a couple. The idea came from after my wife and me were looking online for such game and got really disappointed by what we find. So I decide to make my own.

This repository is designed only for the backend part of the application. I like to challenge myself. So I made everything with `Fastify` and `MongoDB`. I also added a new tools that I wanted to try `GraphQL` and `Apollo Server` who will improve my request.

I do my continuous integration with `Travis` and my coverage is checked by `Coveralls` and `Codeclimate`. I also use `CodeClimate` for checking the level of maintainability of the code. Finally, I use `Ava` for making the test cases. For formatting the code, I use `xo`.

## Organization

The following describe how the project is structured. It's an easy way for discovering the project and the way I organize the code.

#### Organization general

| Folder's Name | Description of the folder                                                    |
| :------------ | :--------------------------------------------------------------------------- |
| env           | Contains the environment files                                               |
| seeding       | Contains everything linked to the seeding of the database                    |
| src           | The source code of the app                                                   |

#### Organization of the src folder

| Folder's Name | Description of the folder                                   |
| :------------ | :---------------------------------------------------------- |
| dbs           | Regroup the mongoose call to the db                         |
| libs          | Regroup functions that can be use anywhere                  |
| models        | Regroup the models meaning the structure of a data          |
| services      | Regroup the services meaning the functions with the logic   |
| types         | Regroup the type of GraphQL                                 |

## Seeding

For having a database with some data from the start, you can seed it with a single command. It will fill up all the db with dummy data using `mongo-seed`.

```
npm run seed
```

## Testing

#### Postman

![Alt text](documentation/postman/postman.jpg?raw=true "POSTMAN-CoupleAPI")

For testing the code manually, I use `postman`. You can download my collection with all the queries and mutations already designed.
[Collections Couple API](documentation/postman/collections.json?raw=true)

For automatic tests, I use `Ava`. All the tests can be run with a single command. The command will also provide details on the coverage.

```
npm run test
```

#### SSH Tunneling

For connecting to the API during the development, I use `localtunnel` for exposing the server through a domain format. The server works on the port 5000, so I use the following commands :

```
npm install -g localtunnel
lt --port 5000 --subdomain couple-api
```

## Running

For running the API, a single command is needed. You might want to use the [SSH Tunneling](#ssh-tunneling).

```
npm run start
```

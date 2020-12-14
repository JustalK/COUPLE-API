# COUPLE-API

![Last version](https://img.shields.io/github/v/tag/justalk/couple-api.svg?style=flat-square)
[![Travis](https://img.shields.io/travis/com/justalk/couple-api.svg?style=flat-square)](https://travis-ci.com/github/JustalK/couple-api)
[![Coverage Status](https://coveralls.io/repos/github/JustalK/COUPLE-API/badge.svg?branch=master)](https://coveralls.io/github/JustalK/COUPLE-API?branch=master)
[![Maintainability Status](https://api.codeclimate.com/v1/badges/83c64f45edc52d90dd9a/maintainability)](https://codeclimate.com/github/JustalK/COUPLE-API/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/83c64f45edc52d90dd9a/test_coverage)](https://codeclimate.com/github/JustalK/COUPLE-API/test_coverage)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg?style=flat-square)](https://github.com/xojs/xo)

This project is a game. The game is a simple and interactive quizz that will trigger discussion for a couple. The idea came from after my wife and me were looking online for such game and got really disappointed by what we find. So I decide to make my own.

This repository is designed only for the backend part of the application. I like to challenge myself. So I made everything with `Fastify` and `MongoDB`. I also added a new tools that I wanted to try `GraphQL` and `Apollo Server` who will improve my request.

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

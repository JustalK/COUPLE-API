# COUPLE-API

This project is a game. The game is a simple and interactive quizz that will trigger discussion for a couple. The idea came from after my wife and me were looking online for such game and got really disappointed by what we find. So I decide to make my own.

This repository is designed only for the backend part of the application. I like to challenge myself. So I made everything with `Fastify` and `MongoDB`. I also added a new tools that I wanted to try `GraphQL` and `Apollo Server` who will improve my request.

## Organization

The following describe how the project is structured. It's an easy way for discovering the project and the way I organize the code.

#### Flowchart of the app

![Alt text](documentation/process/flowchart.png?raw=true "PORTFOLIO-Flowchart")

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

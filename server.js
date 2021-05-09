'use strict';

// /////////////// 1
// make a variable called express to use the express library
const express = require('express'); // npm i express

// /////////////////// 6
require('dotenv').config();

const pokeData = require('./assets/poke.json');


// //////////////////// 12
//CORS= Cross Origin Resource Sharing
// to give the permission for who can touch my server, here everybody
const cors = require('cors');

// ////////// 2
// initialize the express server -> express now is a function
// server has a lot of proprities and methods that I can use it here
const app = express();

// /////////////////13
app.use(cors()); // make it open to everyone since I make it empty parantheses () and I can add a list

// //////////////// 3
// we need a port number to connect our frontend website with the server
// so we need a port number to our express server so the frontend can send request to it
const PORT1 = 3001;

// ////////////////// 5
const PORT = process.env.PORT || 3001;
// create .env file and add PORT=3001
// do step /// 6 fo2


// /////////////// 7
// let's start with the first request
// http://localhost:3000/
// by making a simple route which run a callback function takes 2 argument
// request and response (WRRC) >>>>>>
// request: carries all the parameters in the header (after ? in the url)
// part of the request is the header and the other part is the data that we're asking for
// response is the data we want to send based on the request
app.get('/', (request, response) => {
  response.send('hello from the home route!');
});


// /////////////// 8
app.get('/bananas', (request, response) => {
  response.json({"bananas":"are cool"})
});


// //////////////// 9
const myTargetList = ['shoes', 'bags', 'games', 'cleaning supples'];
app.get('/shoppingList', (request, response) => {
  response.status(200).send(myTargetList);
});


// //////////////// 10
// let's get data from a json file
// create assets directory >> create poke.json
// import the file fo2
app.get('/getPoke',(request,response)=>{
  response.status(200).send(pokeData);
})


// ///////////////// 11
// handle any route
app.get('*', (request, response) => {
  response.status(404).send('not found');
})

// //////////////// 4
// server has a method called listen (listen on PORT)
app.listen(PORT, () => console.log(`listening on ${PORT}`));
// the server is ready and listening to the port
// npm start (like go live with vscode server)
// so now my server is waiting me to do sth
// npm start
// npm start || node server.js >>> (open package.json)

// you can introduce nodemon here
// by npm i -g nodemon

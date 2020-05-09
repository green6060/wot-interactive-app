import characters from './json/characters.json'
import events from './json/events.json'

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const server = require('http').Server(app);
const port = 3000;
const helmet = require('helmet');

app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8100');
	res.setHeader('Access-Control-Allow-Methods', 'GET');
	res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
	next();
});

//pre-flight requests
app.options('*', function(req, res) {
	res.send(200);
});

app.get('/api/characters', (req, res) => {
	res.status(200).send({
        success: 'true',
        data: characters,
    })
});

app.get(`/api/characters/:id`, (req, res) => {
    res.status(200).send({
        success: 'true',
        data: characters.characters[req.params.id]
    })
})

app.get('/api/events', (req, res) => {
	res.status(200).send({
        success: 'true',
        data: events,
    })
});

app.get(`/api/events/:id`, (req, res) => {
    res.status(200).send({
        success: 'true',
        data: events.events[req.params.id]
    })
})

server.listen(port, (err) => {
	if (err) {
		throw err;
	}
	/* eslint-disable no-console */
	console.log('Node Endpoints working :)');
});

module.exports = server;
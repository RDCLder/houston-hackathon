const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const schema = require('./schema');

const server = express();

// Middleware
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));
server.use(cors);

// Routes
server.use(require('/'));
server.use(require('/users'));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`The server is running on port ${ PORT }`);
});

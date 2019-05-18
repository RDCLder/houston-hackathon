const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const server = express();

// Middleware
server.use(logger('dev'));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(cookieParser());
server.use(express.static(path.join(__dirname, 'public')));
server.use(cors);

// Routes
server.use(require('/routes/home'));
server.use(require('/routes/register'));
server.use(require('/routes/login'));
server.use(require('/routes/authenticate'));
server.use(require('/routes/logout'));
server.use(require('/routes/profile'));
server.use(require('/routes/category'));
server.use(require('/routes/posting'));
server.use(require('/routes/createPosting'));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`The server is running on port ${ PORT }`);
});

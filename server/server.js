const express = require('express');
const server = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const db = require('./schema/');

// Middleware
server.use(cors());

// Routes
server.use(require('./routes/categories'));
server.use(require('./routes/category'));
server.use(require('./routes/posting'));
// server.use(require('./routes/createPosting'));
// server.use(require('./routes/register'));
// server.use(require('./routes/login'));
// server.use(require('./routes/authenticate'));
// server.use(require('./routes/logout'));
server.use(require('./routes/profile'));

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

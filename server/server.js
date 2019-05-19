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
// server.use(require('./routes/category'));
// server.use(require('./routes/posting'));
// server.use(require('./routes/createPosting'));
// server.use(require('./routes/register'));
// server.use(require('./routes/login'));
// server.use(require('./routes/authenticate'));
// server.use(require('./routes/logout'));
server.use(require('./routes/profile'));

// const text = [
//     'This is a request comment.',
//     'Generic Comment',
//     'This is spam.',
//     'I cant believe its not butter!',
//     'She sells sea shells by the sea shore.',
//     'To infinity and beyond!',
//     'Its peanut butter jelly time.',
//     'Its finger-lickin good!',
//     'Lorem ipsum...',
//     'This is great!',
//     'I messaged you!',
//     'I sent you a text.',
//     'He won the Houston Hackathon with this one weird trick! Judges hate him!'
// ];
//
// for (let i = 1; i <= 150; i++) {
//     db.comment.create({
//         text: text[Math.floor(Math.random() * text.length)],
//         request_id: Math.floor(Math.random() * 90) + 1,
//         author_id: Math.floor(Math.random() * 6) + 1
//     });
// }

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});

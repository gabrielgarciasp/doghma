const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');

const routers = require('./routes');

const app = express();

// app.use((req, res, next) => {
//     res.removeHeader('X-Powered-By')
//     next()
// })

app.use(helmet()); // cuidar dos headers
app.use(bodyParser.urlencoded({ extended: false })); // transformar o body
app.use(routers);

app.listen(3000);

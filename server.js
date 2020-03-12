const express = require('express');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const cors = require('cors');

const routers = require('./routes');

const app = express();

// app.use((req, res, next) => {
//     res.removeHeader('X-Powered-By')
//     next()
// })

app.use(
    cors({
        exposedHeaders: ['Content-Range', 'X-Content-Range', 'X-Total-Count'],
        credentials: true,
    })
); // liberar acesso
// app.use(helmet()); // cuidar dos headers
app.use(bodyParser.urlencoded({ extended: false })); // transformar o body
app.use(routers);

app.listen(process.env.PORT || 3000, () => console.log('App running'));

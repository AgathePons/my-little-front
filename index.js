require('dotenv').config();

const express = require('express');
const { setHeaders } = require('./app/middlewares/setHeaders');
const router = require('./app/router');

const port = process.env.PORT || 5050;

const app = express();

app.use(express.static('public'));

//app.use(setHeaders.setU)
app.use(router);

app.listen(port, _ => {
   console.log(`http://localhost:${port}`);
});


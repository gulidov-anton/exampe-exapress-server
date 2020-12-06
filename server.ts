import AuthCotroller from './src/Controller/AuthCotroller';
import ClientController from './src/Controller/ClientController';
import MainController from './src/Controller/MainController';
const express = require('express');

const app = express()
const port = 3000

MainController(app)
ClientController(app)
AuthCotroller

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

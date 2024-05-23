"use strict";

const express = require('express');
const router = require('./app/server/controllers/router');
const app = express();
const port = process.env.PORT || 3000;

app.use("/static", express.static('./app/controllers'));
app.use(express.json()); // Use express body-parser to parse all request bodies.
app.use(router);

app.listen(port, () => {
  console.log(`Servidor listo en el puerto ${port}!`);
})

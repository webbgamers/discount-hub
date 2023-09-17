const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.get('/coordinates', (req, res) => {
  //make a request to the back end server
  axios.get(`${process.env.API_URL}/coordinates`)
    .then((result) => {
      res.status(200).send(result.data);
    })
    .catch((err) => {
      res.status(400).send(err);
    });

});

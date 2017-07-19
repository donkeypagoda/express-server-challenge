'use strict';

const bodyParse = require('body-parser');
const express = require('express');
const fs = require('fs');
const morgan = require('morgan');
const path = require('path');

const app = express();
const citiesPath = path.join(__dirname, 'cities.json');

app.use(bodyParse.json());
app.use(morgan('short'));

app.get('/cities', (req, res, next) => {
  fs.readFile(citiesPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err.stack);
      res.status(500);
      res.send(err.message);
    }

    const cities = JSON.parse(data);

    res.send(cities);
  });
});

app.get('/cities/:id', (req, res) => {
  fs.readFile(citiesPath, (err, data) => {
    if (err) {
      console.error(err.stack);
      res.status(500);
      res.send(err.message);
    }

    const id = Number.parseInt(req.params.id);
    const cities = JSON.parse(data);

    if (id < 0 || id >= cities.length || Number.isNaN(id)) {
      // BONUS
      res.sendStatus(400);
      // res.send(err.message);
    }

    res.send(cities[id]);
  });
});

app.post('/cities', (req, res, next) => {
  const name = req.body.name;
  const state = req.body.state;

  if (!name || !state) {
    res.sendStatus(400);
  }

  let newCity = {"name": name, "state": state };

  fs.readFile(citiesPath, 'utf8', (err, data) => {
    if (err) {
      res.status(500);
      res.send(err.message);
    }

    let cities = JSON.parse(data);

    cities.push(newCity);
    const citiesJSON = JSON.stringify(cities);

    fs.writeFile(citiesPath, citiesJSON, (err) => {
      if (err) {
        res.status(500);
        next(err);
      }

      res.send(newCity);
    })
  });
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.use((err, req, res, next) => {
  console.error(err);
  res.send(err.message);
})

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

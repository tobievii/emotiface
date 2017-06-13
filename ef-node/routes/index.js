const express = require('express');
const router = express.Router();
const Queries = require('../db/Queries.js');
const db = new Queries();
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'emotiface'
  });
});

router.get('/emo', (req, res, next) => {
  db.addAllToDb();
  res.render('index', {
    title: 'emo'
  });
});

module.exports = router;

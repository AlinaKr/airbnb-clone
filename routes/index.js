const express = require('express');
const router  = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/rooms/new', (req, res, next) => {
  res.render('rooms-new');
});

router.post('/rooms/new', (req, res, next) => {
  res.render('rooms-new');
});

module.exports = router;

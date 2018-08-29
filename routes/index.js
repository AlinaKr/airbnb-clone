const express = require('express');
const router  = express.Router();
const Room = require("../models/Room");

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/rooms/new', (req, res, next) => {
  res.render('rooms-new');
});

router.post('/rooms/new', (req, res, next) => {
  Room.create({
    name: req.body.name,
    description : req.body.description
  }).then(newRoom => {
    res.redirect("/rooms/"+ newRoom._id)
  })
});

router.get('/rooms/:id', (req, res, next) => {
  Room.findById(req.params.id)
  .then(room => {
    res.render('room-detail', { room });
  })
});

module.exports = router;

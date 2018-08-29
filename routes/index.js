const express = require('express');
const router  = express.Router();
const Room = require("../models/Room");
const ensureLoggedIn = require("connect-ensure-login").ensureLoggedIn;

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/rooms/new', ensureLoggedIn('/auth/login'), (req, res, next) => {
  res.render('rooms-new');
});

router.post('/rooms/new',ensureLoggedIn('/auth/login'),(req, res, next) => {
  console.log('DEBUG req.user', req.user);
  Room.create({
    name: req.body.name,
    description : req.body.description,
    _owner: req.user._id
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

router.get("/rooms" , (req,res,next)=>{
  Room.find()
  .populate("_owner")
  .then(rooms=>{
    res.render("rooms", {rooms:rooms})
  })
})

module.exports = router;



console.log("ensureLoggedIn", 
  ensureLoggedIn('/ironhack'));

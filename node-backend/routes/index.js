var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create routes for a meme api
// get all memes
router.get('/memes', function(req, res, next) {
  const memes = db.get('memes');
  memes.find({})
      .then((docs) => res.json(docs))
      .catch((e) => res.status(500).send())
});

// create a new meme
router.post('/memes', function(req, res, next) {
  const memes = db.get('memes');
  memes.insert(req.body)
      .then((docs) => res.json(docs))
      .catch((e) => res.status(500).send())
});

// get a single meme
router.get('/memes/:id', function(req, res, next) {
  const memes = db.get('memes');
  memes.find({_id: req.params.id})
      .then((docs) => res.json(docs))
      .catch((e) => res.status(500).send())
});

module.exports = router;

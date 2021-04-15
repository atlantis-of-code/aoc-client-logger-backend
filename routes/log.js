const express = require('express');
const router = express.Router();
const writer = require('../utils/writer');

router.get('/', function(req, res, next) {
  res.end();
});

router.post('/log', function(req, res, next) {
  const log = req.body;
  writer.write(log);
  res.end();
});

module.exports = router;

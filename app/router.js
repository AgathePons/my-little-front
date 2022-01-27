const express = require('express');

const router = express.Router();

router.get('/', function(req, res) {
  res.sendfile(path.join(__dirname, '/index.html'));
});

module.exports = router;
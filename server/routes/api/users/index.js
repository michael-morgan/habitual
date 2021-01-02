var express = require('express');
var router = express.Router();

router.use('/:userId/habits', function(req, res, next) {
    req.userId = req.params.userId;
    next();
}, require('./habits'));

module.exports = router;

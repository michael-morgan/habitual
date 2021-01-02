var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    const USER_ID = req.userId;
});

router.get('/:habitId', function(req, res, next) {
    const USER_ID = req.userId;
});

router.use('/:habitId/logs', function(req, res, next) {
    req.habitId = req.params.habitId;
    next();
}, require('./logs'));

module.exports = router;

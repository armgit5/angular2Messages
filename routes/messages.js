var express = require('express');
var router = express.Router();

var Message = require('../models/message');

router.post('/', function(req, res, next) {
    var message = new Message({
        content: req.body.content
    });
    message.save(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: 'An error occurred',
                err: err.message
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj: result
        });
    });
});

module.exports = router;
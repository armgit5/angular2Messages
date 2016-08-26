var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');

var User = require('../models/user');

router.post('/', function(req, res, next) {
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash(req.body.password),
        email: req.body.email
    });

    user.save(function(err, result) {
        if (err) {
            return res.status(404).json({
                title: 'Am error occured',
                error: err
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        });
    });
});

module.exports = router;
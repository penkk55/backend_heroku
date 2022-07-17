var express = require('express');

// Create wrapper function that will adjust router based on provided configuration
var wrapper = function (animal_config) {
    var router = express.Router();
    
    router.get('/about', function(req, res) {
        var animal = animal_config;
        res.send(animal.name + ' says ' + animal.says);
    });

    return router;
}

module.exports = wrapper;
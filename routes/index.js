var router = require('express').Router();

router.get('/', function(request, response) {
    response.sendFile("index.html", {"root": __dirname + '/../'});
});

module.exports = router;
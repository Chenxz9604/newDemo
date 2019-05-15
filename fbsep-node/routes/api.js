var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    var data={
        code:9999,
        msg:"OK",
        data:"Hello Node Server"
    };
    res.json(data);
});

var axios = require('axios');
var url = "http://localhost:8080/api/hello";

router.get('/hello', function(req, res, next) {
    axios.get(url)
        .then(function (response) {
            console.log(response);
            res.send(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
});

module.exports = router;

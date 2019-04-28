var express = require('express');
var proxy = require('express-http-proxy');
var http = require('http');

var app = express();
var port = 8223;
var server = http.createServer(app).listen(port);

app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

        console.log(res);
        next();
});

app.use('/sheetdb',
    proxy('https://sheetdb.io/api/v1/iknrrsimgqa4j'));
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* obtener body */
app.post("/op", function(req, res) {
    req.accepts('application/json');
    res.status(200).json(req.body);
});

/* obtener body */
app.get("/o", function(req, res) {
    res.status(200).json({});
});

var port = process.env.PORT || 8080;
var host = 'http://localhost:' + port;

app.listen(port, function() {
    console.log("Listening on " + host);
});
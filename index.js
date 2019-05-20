const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.urlencoded({ extended: false}));

app.get('/abc-def', function (req, resp) {
    console.send("Hello abc def");
});


app.post('/demo', function (req, resp) {
    resp.send("heloo"+ req.query.name );
});

app.listen(port, function () {
    console.log("Hello world!"+ port);
});

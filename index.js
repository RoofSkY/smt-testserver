const express = require('express');
const app = express();

app.listen(3000, function () {
    console.log('Server running on port 8080');
});

app.get('/test', function (req, res) {
    res.send('Hello World');
});

app.get('/htmltest', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/md', function (req, res) {
    res.sendFile(__dirname + '/md.html');
});
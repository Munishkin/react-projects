const express = require('express');
const app = express();

app.use(express.static('build'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
}).listen(3000);

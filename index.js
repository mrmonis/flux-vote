/**
* @author Ben Monis
* @revised 06/05/2016
*/
var path = require('path');
var express = require('express');

var app = express();

var staticPath = path.resolve(__dirname, './dist');
app.use(express.static(staticPath));

app.listen(3000, function() {
  console.log('listening');
});
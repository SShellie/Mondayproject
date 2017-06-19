console.log('hello');

const express = require('express');
const app = express();

app.listen(3000);
var loremIpsum = require ('lorem-ipsum');

output = loremIpsum({

  count: 3, units: 'paragraphs', format: 'html'
} );

app.get ('/', function  (req, res) {

res.send (output)

} );

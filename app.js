var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const port = process.env.PORT || 3500;



var app = express();
app.use(express.static(__dirname + '/public'));

const router = express.Router();

router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
    //__dirname : It will resolve to your project folder.
});

app.use('/', router);
app.listen(port);
console.log('Server started at http://localhost:' + port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;

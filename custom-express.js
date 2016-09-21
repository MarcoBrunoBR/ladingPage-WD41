var express = require('express')
var app = express();

module.exports = function () {
    app.set('view engine', 'ejs');

    require('./controller/wd41')(app);

    app.use(express.static('./public'));

    return app;
}

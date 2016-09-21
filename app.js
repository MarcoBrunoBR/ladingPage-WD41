var app = require('./custom-express')();

app.listen(3000, function () {
    console.log('O servidor está rodando em: http://localhost:3000');
});

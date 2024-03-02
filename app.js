const express = require('express');

const app = express('');

app.get('/', function(req, res) {
    res.send('Hello World')
});


app.get('/user', function(req, res) {
    res.send([
        {id:1, nome: 'Ana'},
        {id:2, nome: 'Paloma'},
        {id:3, nome: 'Paula'},
        {id:4, nome: 'Catarina'}
    ])
});

// Rota com parametro
app.get('/user/:nome', function(req, res){
    res.send({
        nome: req.params.nome
    })
})





app.listen(8080, function(){
    console.log('Server running')
});



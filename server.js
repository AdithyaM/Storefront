var express = require('express');
var fs = require('fs');
var app = express();
app.set('port', process.env.PORT || 3000);

var json = JSON.parse(fs.readFileSync('products.json', 'utf8'));

app.get('/', function(req, res){
    res.type('text/plain');
    res.send('Change Url to /products to see products API');
});

app.get('/products', function(req, res){
    res.type('text/plain');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(json);
});

//Custom 404 Page
app.use(function(req, res, next){
    res.type('text/plain');
    res.status(404);
    res.send('404- Not Found');
});


//Custom 500 Page
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500- Server Error');
});

app.listen(app.get('port'), function(){
    console.log('Express started on http://localhost:' +
    app.get('port'));
});

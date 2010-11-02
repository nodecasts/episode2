var express = require('express'),
    faye = require('faye');

var bayeux = new faye.NodeAdapter({
  mount:    '/faye',
  timeout:  45
});

var app = express.createServer();
app.configure(function () {
  app.use(express.bodyDecoder());
  app.use(express.staticProvider(__dirname + '/public'));
});

app.post('/message', function(req, res) {
  bayeux.getClient().publish('/channel', {text: req.body.message});
  res.send(200);
});

bayeux.attach(app);
app.listen(8000);

var express = require('express');
var app = express();

 app.get('/',function(req,res) {
   res.send("Happy Birthday vasanthhhhh");
});

 app.listen(5000);

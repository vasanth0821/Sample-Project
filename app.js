var express = require('express');
var app = express();

 app.get('/',function(req,res) {
   res.send("Happy Birthday vasanth");
});

 app.listen(5000);

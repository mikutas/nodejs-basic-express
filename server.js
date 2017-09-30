var express = require("express");
var app = express();

var morgan = require("morgan");

app.use(morgan("dev"));

app.get("/hello/:name", function(req, res){
    res.send("Hello, " + req.params.name + "!");
});

var articles = [];

app.get("/articles", function(req, res){
    res.json(articles);
});

app.post("/articles", function(req, res){
    articles.push(req.body);
    res.redirect("/articles");
});

app.get("/articles/:id", function(req, res){

});

app.put("/articles/:id", function(req, res){

});

app.delete("/articles/:id", function(req, res){

});

app.listen(3000, function(){
    console.log("Running on port 3000");
});

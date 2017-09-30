var express = require("express");
var app = express();

var morgan = require("morgan");

app.use(morgan("dev"));

var router = require("./routes/route")(express);
app.use("/", router);

app.listen(3000, function(){
    console.log("Running on port 3000");
});

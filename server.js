//this file acts as the main file that is ran by gitbash. all npms are required in this file. 

var express = require("express");
var bodyParser= require("body-parser");
var exphbs = require("express-handlebars");


var app = express();
var PORT = process.env.PORT || 3000;


//the static file allows for express to find the path to the folder that contains the documents that will be used
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


//handlesbars is the template engine
app.engine("handlebars", exphbs({defaultLayout:"main"}));
app.set("view engine", "handlebars");

//this is the routes used to connect to 
var routes = require("./controllers/burgers_controller");
app.use(routes);



app.listen(PORT, function(){
    console.log("Server listening on " + PORT);
});
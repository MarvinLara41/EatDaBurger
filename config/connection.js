//this file sets up the connection to mysql(database)


const mysql = require("mysql");
connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password: "25Million",
    database: "burgers_db"
});


//the shows terminal that we are connect to mysql by responding with an id (treadid)
connection.connect(function(err){
    if (err){
        console.error("error connecting"+ err.stack);
        return;
    }
    console.log("connected as id"+ connection.treadId);
});





//module.exports= connection allows for this file to be used else where

module.exports = connection; 
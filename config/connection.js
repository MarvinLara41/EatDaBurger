//this file sets up the connection to mysql(database)


const mysql = require("mysql");

if (process.env.burgers_db){
    
    connection = mysql.createConnection(process.env.burgers_db);
}else{
    connection = mysql.createConnection({
        host:"localhost",
        user:"root",
        password: "******",
        database: "burgers_db"
});
}


//the shows terminal that we are connect to mysql by responding with an id (treadid)
connection.connect()




//module.exports= connection allows for this file to be used else where

module.exports = connection; 
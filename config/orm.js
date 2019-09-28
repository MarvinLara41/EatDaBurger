var connection = require("../config/connection");

// this file one of the most important files of the app
// requiring config/connection is needed because that file is what connects me to mysql
//


//these are helper functions
//createQmarks creates an array, it loops through the array and returns a string value.
//the toString() function returns a string
function createQmarks(num){
    var arr = [];
    for(var i = 0; 1 < num; i++){
        arr.push("?");
    }
    return arr.toString();
}



//this function translates a string into an sql readable query
//turns array into a string
//".push" pushes the array to database
//hasOwnProperty is function which can be used with any object. returns a boolean if true
//indexof searches for a specific itme and returns its positon
function translateSql(ob){
    var arr=[];
    for (var key in ob){
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob,key)){
            if (typeof value === "string" && value.indexOf(" ") >=0){
                value= " " + value + " ";
                
            }
            arr.push(key + " =" + value) 
        }
    }
    return arr.toString();
}











var orm = {
    selectAll: function(table, cb){
        // creating this variable and equaling it to SELECT * FROM + table is allowing us to use the database table from mysql on the font-end
        var dbQuery = "SELECT * FROM" + table + ";";



        //adding this inside the function allows us to connect to mysql when the action of this function is preformed 
        connection.query(dbQuery, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })
    },


   // this function allow me to insert a new value into the table on the mysql database  
    insertOne:function(table, cols,vals,cb){
        var dbQuery = "INSERT INTO" + table+ " ("+cols.toString() + ") "+ "VALUES ("+ createQmarks(vals.length)+ ")";
        console.log(dbQuery);
        
        
        //
        connection.query(dbQuery, vals, function(err, res){
            if (err){
                throw err
            }
            cb(res);
        });
    },




    //after insertion the values need to be updated. in this function 
    //dbQuery is adjusted to UPDATE + table + SET
   
    updateOne: function(table, objColVals, condition, cb){
        var dbQuery = 
        "UPDATE" + table + "SET" + translateSql(objColVals) + "WHERE" + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res){
            if (err){
                throw err
            }
            cb(res);
        });
    },



    //condition dictates wheather the something is true or false
    deleteOne: function(table, condition, cb){
        var dbQuery= "DELETE FROM" + table + "WHERE" + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(err, res){
            if (err){
                throw err
            }
            cb(res);
        });
    }
    

};


module.exports= orm;
var express= require("express");
var burger = require("../models/burgers");

//this file is the router controller 
//build router connections manages database arrays and ids the endpoints
//Router is apart of express syntax
var router = express.Router();


//this is backend code connected to server
//GET ROUTER, loads data from the server using a HTTP GET request, script runs the response
//returns it as json
router.get("/",function(req,res){
    burger.selectAll(function(data){
        var hdbarsObj = {
            burgers:data
        }
        console.log(hdbarsObj);
        res.render("index", hdbarsObj);
    });



    //POST ROUTER, loads data from the server using a HTTP POST request.
    router.post("/api/burgers", function(req,res){
        burgers.insertOne(
            ["burger_name", "devoured"],
            [req.body.burger_name, req.body.devoured],
            function(result){
                res.json({ id: result.insertId});


                //this sends back the id of a new burger. the response is sent back in a json file to post on the client side which is why is under the router.post
            }
        )
    });


    //PUT ROUTER, 
    router.put("/api/burgers/:id", function(req,res){
        var condition = "id" + req.params.id;

        console.log("condition", condition);
        burger.updateOne({ devoured:req.body.devoured}, condition, function(result){
            if (result, changedRows === 0){
                return res.status(404).end();
            } else{
                res.status(200).end();
            }
        });
    });




    router.delete("/api/burgers/:id", function(req,res){
        var condition = "id"+ req.params.id;

        console.log("condition", condition);

        burger.deleteOne(condition, function(result){
            if (result, changedRows === 0){
                return res.status(404).end();
            } else{
                res.status(200).end();
            }
        });
    });
});


//export file
module.exports=router;



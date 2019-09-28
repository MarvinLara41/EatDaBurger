
//this file contains the ajax that contains all the onclick events that trigger actions




//preventDefault prevents the function from automatically running
//location.reLoad() is used to reload the page once the ajax is used
$(function(){
    $(".create-form").on("submit", function(event){
        event.preventDefault();



        var newBurger = {
            burger_name: $("#newburger") .val() .trim(), devoured: 0
        };


        //the post request ajax 
        $.ajax("api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("New burger added");
            location.reload();
        })
    });



//devouredState is set to true, 
    $(".eatburger").on("click", function(event){
        event.preventDefault();

        var id = $(this.data("id"));

        var devouredState = {
            devoured: 1
        }

        $.ajax("/api/burgers/"+ id, {
            type: "PUT",
            data: devouredState
        }).then(function(){
            console.log("Burger was destoryed");
            location.reload();
        });
    });


//this creates the delete action
    $(".trashburger").on("click"), function(event){
        event.preventDefault();

        var id = $(this).data("id");

        //this ajax call sends a delete request 

        $.ajax({
            type: "DELETE",
            url:"/api/burgers/"+ id
        }).then(location.reload());
    }
    
});


var orm = require("../config/orm");
//this model requires the orm 
//it calls back all the orms created in the orm file


var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne : function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },

    updateOne : function(objColVals, condition, cb){
        orm.updateOne("burgers",objColVals,condition, function(res){
            cb(res);
        });
    },

    deleteOne : function(conditions, cb){
        orm.deleteOne("burgers",conditions, function(res){
            cb(res);
        })
    }
}

//file needs to be exported. 
module.exports=burger;
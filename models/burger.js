var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(col, val, cb) {
    orm.insertOne("burgers", col, val, function(res) {
      cb(res);
    });
  },
  update: function(objColVal, condition, cb) {
    orm.update("burgers", objColVal, condition, function(res) {
      cb(res);
    });
  },
  delete: function(conditionVal, cb){
    orm.delete("burgers", "id", conditionsVal, function(res){
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;

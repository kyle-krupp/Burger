// import the ORM file
var orm = require("../config/orm.js");

// logic for calling ORM functions
var burger = {
    all: (_cb) => {
        orm.all("burgers", (res) => {
            _cb(res);
        });
    },
    insertOne: (col,val,_cb) => {
        orm.insertOne("burgers",col,val, (res) => {
            _cb(res);
        });
    },
    update: (objColVal,condition,_cb) => {
        orm.update("burgers",col,val, (res) => {
            _cb(res);
        });
    },
    delete: (conditionalVal,_cb) => {
        orm.delete("burgers", "id", conditionsVal, (res) => {
            _cb(res);
        });
    }
};

// export burger.js file
module.exports = burger;


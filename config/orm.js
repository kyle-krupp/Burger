var connection = require("../config/connection.js");

function sqlObjects(ob) {
    var emptyArray = [];

    for (var key in ob) {
        if (oject.hasOwnProperty(key)){
            return key + '=' + object[key];
        }
    }
}

var orm = {
    all: (tableInput, _cb) => {
        var queryString = 'SELECT * FROM ' + tableInput + ';';
        connection.query(queryString, (err, result) => {
            if (err) throw err;
            _cb(result);
        });
    },
    insertOne: (table, col, val, _cb) => {
        var queryString = 'INSERT INTO ' + table;

        queryString += ' (';
        queryString += col;
        queryString += ' )';
        queryString += 'VALUES (';
        queryString += '?';
        queryString += ') ';

        connection.query(queryString, val, (err,result) => { 
            if (err) throw err;
            _cb(result);

        });
    },
        update: (table, objColVal, condition, _cb) => {
            var queryString = 'UPDATE ' + table;

        queryString += ' SET ';
        queryString += sqlObjects(objColVal);
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) throw err;
            _cb(result);
        });
    }
    
};

module.exports = orm;
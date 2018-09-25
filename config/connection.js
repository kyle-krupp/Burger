var mysql = require("mysql");

// declare connection variable globally
var connection;

if (process.env.JAWS) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
connection = mysql.createConnection({
    port: 8080,
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "burgers_db"
});
};

// connect
connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadID);
});

// export connection for ORM to use
module.exports = connection;


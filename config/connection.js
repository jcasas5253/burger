var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'burgers_db'

});

if (proccess.env.JAWSDB_URL) {
    connection1 = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection1 = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'hacktheplanet',
        database: 'todoagain_db'
    });
};

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
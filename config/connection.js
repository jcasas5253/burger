var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'root',
    database: 'burgers_db'

});


connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});


if (proccess.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'o677vxfi8ok6exrd.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'ddl63npcqu4uv16e',
        password: 'xe65pw7v34cih50o',
        database: 'todoagain_db'
    });
};

module.exports = connection;
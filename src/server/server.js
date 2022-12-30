const mysql = require('mysql')
const conn = {
    host : '127.0.0.1',
    port : '3306',
    user : 'root',
    password : '4612',
    database : 'movie'
};
var connection = mysql.createConnection(conn);
connection.connect();

var testQuery = "select * from movie";

connection.query(testQuery,function(err,result,fields){
    if(err) console.log(err);
    console.log(result)
});
connection.end();


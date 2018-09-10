var mysql = require("mysql");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

// create the burgers_db database and burgers table
// and populate the burgers table
connection.query("DROP DATABASE IF EXISTS burgers_db", function (err) {
    if (err) throw err;
    connection.query("CREATE DATABASE burgers_db", function (err) {
        if (err) throw err;
        connection.query("USE burgers_db", function (err) {
            if (err) throw err;
            connection.query("CREATE TABLE burgers ("
                + "id int NOT NULL AUTO_INCREMENT,"
                + "burger_name varchar(255) NOT NULL,"
                + "devoured BOOLEAN DEFAULT false,"
                + "PRIMARY KEY (id)"
                + ")", function (err) {
                if (err) throw err;
                // seed the burgers table in the burgers_db database with sample data
                connection.query("INSERT INTO burgers (burger_name, devoured)"
                    + "VALUES"
                    + "(\"Big Mac\", false),"
                    + "(\"Junior Chicken\", false),"
                    + "(\"Cheese Burger\", true),"
                    + "(\"Turkey Burger\", false)", function (err) {
                    if (err) throw err;
                    console.log("The burgers_db database and the associated burgers table have been created.");
                    console.log("The burgers tables in the burgers_db database has been seeded with 'mock' data.");
                    process.exit(0);
                });
            });
        });
    });
});

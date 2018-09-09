-- change the root password to an empty string for development purposes
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

### Schema
DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

/*NOTE: we are using "dlpuxkffum00ap2m" as the database name since
this is the default database name that JawsDB MySQL provided us 
with in Heroku
*/

-- change the root password to an empty string for development purposes
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';

### Schema
DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- DROP DATABASE IF EXISTS dlpuxkffum00ap2m;
-- CREATE DATABASE dlpuxkffum00ap2m;
-- USE dlpuxkffum00ap2m;

CREATE TABLE burgers
(
	id INT AUTO_INCREMENT NOT NULL,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);

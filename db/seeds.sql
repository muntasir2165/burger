/*NOTE: we are using "dlpuxkffum00ap2m" as the database name since
this is the default database name that JawsDB MySQL provided us 
with in Heroku
*/

USE burgers_db;
-- USE dlpuxkffum00ap2m;

-- seed the burgers table in the burgers_db database with sample data
INSERT INTO burgers (burger_name) VALUES ("Big Mac");
INSERT INTO burgers (burger_name) VALUES ("Junior Chicken");
INSERT INTO burgers (burger_name, devoured) VALUES ("Cheese Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Turkey Burger", false);

USE burgers_db;
-- USE dlpuxkffum00ap2m;
SELECT * FROM burgers;

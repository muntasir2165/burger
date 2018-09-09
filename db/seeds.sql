USE burgers_db;

-- seed the burgers table in the burgers_db database with sample data
INSERT INTO burgers (burger_name) VALUES ("Big Mac");
INSERT INTO burgers (burger_name) VALUES ("Junior Chicken");
INSERT INTO burgers (burger_name, devoured) VALUES ("Cheese Burger", true);
INSERT INTO burgers (burger_name, devoured) VALUES ("Turkey Burger", false);

USE burgers_db;
SELECT * FROM burgers;

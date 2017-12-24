CREATE DATABASE IF NOT EXISTS MealPlanner;

USE MealPlanner;

CREATE TABLE User (id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email varchar(50) NOT NULL,
    password varchar(50) NOT NULL,
    fname varchar(50) NOT NULL,
    lname varchar(50) NOT NULL,
    city varchar(50),
    country varchar(50));

CREATE TABLE Intolerances (name_short varchar(4) NOT NULL PRIMARY KEY, name varchar(50) NOT NULL);

CREATE TABLE Diets (name_short varchar(4) NOT NULL PRIMARY KEY, name varchar(50) NOT NULL);

CREATE TABLE User_Intolerances (user_id int NOT NULL, intolerance_name varchar(4) NOT NULL, PRIMARY KEY (user_id, intolerance_name));

CREATE TABLE User_Diets (user_id int NOT NULL, diet_name varchar(4) NOT NULL, PRIMARY KEY (user_id, diet_name));

INSERT INTO Intolerances (name_short, name) VALUES ("DAIR", "Dairy");
INSERT INTO Intolerances (name_short, name) VALUES ("EGGS", "Eggs");
INSERT INTO Intolerances (name_short, name) VALUES ("FISH", "Fish");
INSERT INTO Intolerances (name_short, name) VALUES ("GLUT", "Gluten");
INSERT INTO Intolerances (name_short, name) VALUES ("PEAN", "Peanuts");
INSERT INTO Intolerances (name_short, name) VALUES ("SHEL", "Shellfish");
INSERT INTO Intolerances (name_short, name) VALUES ("SOYY", "Soy");
INSERT INTO Intolerances (name_short, name) VALUES ("TREE", "Tree Nuts");
INSERT INTO Intolerances (name_short, name) VALUES ("WHEA", "Wheat");

INSERT INTO Diets (name_short, name) VALUES ("ALCO", "Alcohol-free");
INSERT INTO Diets (name_short, name) VALUES ("BALA", "Balanced");
INSERT INTO Diets (name_short, name) VALUES ("HIFI", "High Fiber");
INSERT INTO Diets (name_short, name) VALUES ("HIPR", "High Protein");
INSERT INTO Diets (name_short, name) VALUES ("LOCA", "Low Carb");
INSERT INTO Diets (name_short, name) VALUES ("LOFA", "Low Fat");
INSERT INTO Diets (name_short, name) VALUES ("LOSO", "Low Sodium");
INSERT INTO Diets (name_short, name) VALUES ("LOSU", "Low Sugar");
INSERT INTO Diets (name_short, name) VALUES ("PALE", "Paleo");
INSERT INTO Diets (name_short, name) VALUES ("VEGA", "Vegan");
INSERT INTO Diets (name_short, name) VALUES ("VEGE", "Vegetarian");




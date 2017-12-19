CREATE DATABASE MealPlanner;

use MealPlanner;

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



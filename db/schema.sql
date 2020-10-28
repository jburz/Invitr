-- Create database and -- Get a list of tables and views in the current database
DROP DATABASE IF EXISTS weddinginvite_db;
CREATE DATABASE weddinginvite_db;
USE weddinginvite_db;

CREATE TABLE guest_list (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    phone_number VARCHAR(10) NOT NULL,
    street_address VARCHAR(50) NOT NULL,
    city_address VARCHAR(30) NOT NULL,
    state_address VARCHAR(10) NOT NULL,
    zip_address VARCHAR(10) NOT NULL,
    food_restriction BOOLEAN NOT NULL,
    food_restriction_details VARCHAR(30),
    additional_guests INTEGER NOT NULL,
    email VARCHAR(50) NOT NULL,
    invited BOOLEAN DEFAULT(false) NOT NULL,
    rsvp BOOLEAN DEFAULT(false) NOT NULL,
    comment VARCHAR(100),
    PRIMARY KEY (id)
);

CREATE TABLE guest_login (
    id INT AUTO_INCREMENT,
    auth_email VARCHAR(50) NOT NULL,
    auth_password VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);
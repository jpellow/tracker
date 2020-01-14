DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employee (
    id int NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int(30),
    manager_id int(30),
    PRIMARY KEY(id)
)

CREATE TABLE role(
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10),
    department_id int(30),
    PRIMARY KEY(id)
)

CREATE TABLE department(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
)
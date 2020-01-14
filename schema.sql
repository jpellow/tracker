DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;


CREATE TABLE department(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY(id)
);
INSERT INTO department (name) VALUE ("awesome");

CREATE TABLE role(
    id int NOT NULL AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL(10),
    department_id int(30),
    PRIMARY KEY(id),
	FOREIGN KEY(department_id) REFERENCES department(id)
);
INSERT INTO role (title, salary, department_id) VALUE ("cool guy", 1000, 1);


CREATE TABLE employee(
    id int NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id int(30),
    manager_id int(30),
    PRIMARY KEY(id),
    FOREIGN KEY(role_id) REFERENCES role(id),
    FOREIGN KEY(manager_id) REFERENCES employee(id)
);

INSERT INTO employee (first_name, last_name, role_id) VALUE ("Mark", "Witt", 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUE ("Jeremy", "Pellow", 1, 1);

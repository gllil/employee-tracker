DROP DATABASE IF EXISTS employee_tracker_db;

CREATE DATABASE employee_tracker_db;

USE employee_tracker_db;

CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCAHR(30),
    role_id INT,
    manager_id INT
);

CREATE TABLE role (
    id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(6,2),
    department_id INT
);

CREATE TABLE department (
    id INT PRIMARY KEY,
    name VARCHAR(30)
);
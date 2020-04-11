INSERT INTO department (id, name) VALUES (1, "Sales");
INSERT INTO department (id, name) VALUES (2, "Engineering");
INSERT INTO department (id, name) VALUES (3, "Finance");
INSERT INTO department (id, name) VALUES (4, "Legal");

INSERT INTO role (id, title, salary, department_id) VALUES (1, "Sales Lead", 80000.00, 1 );
INSERT INTO role (id, title, salary, department_id) VALUES (2, "Sales Person", 70000.00, 1 );
INSERT INTO role (id, title, salary, department_id) VALUES (3, "Lead Engineer", 110000.00, 2 );
INSERT INTO role (id, title, salary, department_id) VALUES (4, "Software Engineer", 90000.00, 2 );
INSERT INTO role (id, title, salary, department_id) VALUES (5, "Account Manager", 80000.00, 3 );
INSERT INTO role (id, title, salary, department_id) VALUES (6, "Accountant", 70000.00, 3 );
INSERT INTO role (id, title, salary, department_id) VALUES (7, "Legal Team Lead", 100000.00, 4 );
INSERT INTO role (id, title, salary, department_id) VALUES (8, "Lawyer", 100000.00, 4 );

INSERT INTO managers (id, name) VALUES (1, "Janet McIntosh");
INSERT INTO managers (id, name) VALUES (2, "Joseph Williams");
INSERT INTO managers (id, name) VALUES (3, "Omar Sanchez");
INSERT INTO managers (id, name) VALUES (4, "Michael Kehl");
INSERT INTO managers (id, name) VALUES (5, "Jonathan Mitchell");
INSERT INTO managers (id, name) VALUES (6, "Susan Jacobson");
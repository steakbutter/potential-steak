INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Legal'),
(3, 'Engineering'),
(4, 'Finance');

INSERT INTO roles (id, title, salary, department_id) VALUES
(1, 'Sales Lead', 100000, 1),
(2, 'Sales Person', 80000, 1),
(3, 'Legal Team Lead', 250000, 2),
(4, 'Lawyer', 190000, 2),
(5, 'Lead Engineer', 150000, 3),
(6, 'Software Engineer', 120000, 3),
(7, 'Account Manager', 160000, 4),
(8, 'Accountant', 125000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'Henry', 'Chinaski', 1, NULL),
(2, 'Kilgore', 'Trout', 1, 1),
(3, 'Billy', 'Pilgrim', 2, NULL),
(4, 'Stuart', 'Little', 2, 3),
(5, 'Holden', 'Caulfield', 3, NULL),
(6, 'Louie', 'Szekely', 3, 5),
(7, 'Charles', 'Bukowski', 4, NULL),
(8, 'Tyler', 'Durden', 4, 7);


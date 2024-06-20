INSERT INTO department (name) VALUES
('Sales'),
('Legal'),
('Engineering'),
('Finance');

INSERT INTO role (title, salary, department_id) VALUES
('Sales Lead', 100000, 1),
('Sales Person', 80000, 1),
('Legal Team Lead', 250000, 2),
('Lawyer', 190000, 2),
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 3),
('Account Manager', 160000, 4),
('Accountant', 125000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES
('Henry', 'Chinaski', 1, NULL),
('Kilgore', 'Trout', 1, 1),
('Billy', 'Pilgrim', 2, NULL),
('Stuart', 'Little', 2, 3),
('Holden', 'Caulfield', 3, NULL),
('Louie', 'Szekely', 3, 5),
('Charles', 'Bukowski', 4, NULL),
('Tyler', 'Durden', 4, 7);


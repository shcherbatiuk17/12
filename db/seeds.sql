USE company_db;

-- Insert new departments for a retail store
INSERT INTO department (dept_name)
VALUES 
    ("Cashiers"),
    ("Sales"),
    ("Inventory"),
    ("Customer Service"),
    ("Loss Prevention"),
    ("Visual Merchandising"),
    ("Human Resources");

-- Insert new roles for a retail store
INSERT INTO role (title, salary, department_id)
VALUES 
    ("Cashier", 25000, 1),
    ("Store Manager", 60000, 2),
    ("Inventory", 28000, 3),
    ("Customer Services", 26000, 4),
    ("Visual Merchandiser", 32000, 6),
    ("HR Coordinator", 35000, 7);

-- Insert more employees with typical Ukrainian names
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Oleksandr', 'Kovalenko', 1, NULL),
    ('Nataliya', 'Petrova', 2, 1),
    ('Mykola', 'Ivanenko', 1, 1),
    ('Yuliya', 'Semenova', 4, NULL),
    ('Andriy', 'Voloshyn', 3, 4),
    ('Tetiana', 'Kovalchuk', 3, 4),
    ('Viktor', 'Symonenko', 6, NULL),
    ('Oksana', 'Hrytsenko', 5, 7),
    ('Serhiy', 'Sokolov', 5, 7),
    ('Larysa', 'Melnik', 8, NULL),
    ('Volodymyr', 'Pavlenko', 7, 10),
    ('Iryna', 'Koval', 7, 10),
    ('Pavlo', 'Zhytomyrsky', 10, NULL),
    ('Anna', 'Tkachenko', 9, 13)

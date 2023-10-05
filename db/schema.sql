DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;

USE company_db;

CREATE TABLE department (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    dept_name VARCHAR(30)
);

CREATE TABLE role (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
     FOREIGN KEY (department_id)
     REFERENCES department(id)
     ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
     FOREIGN KEY(role_id)
     REFERENCES role(id)
     ON DELETE SET NULL,
    manager_id INT,
     FOREIGN KEY(manager_id)
     REFERENCES employee(id)
     ON DELETE SET NULL
)

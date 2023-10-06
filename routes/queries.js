const { dbConnection } = require("../config/connect");

// Function to retrieve employee data from the database
async function fetchEmployeeData() {
  const query = `SELECT e.id AS employee_id, e.first_name, e.last_name, r.title AS role, d.dept_name AS department, r.salary, CONCAT(m.first_name, " ", m.last_name) AS manager
  FROM employee e
  JOIN role r ON e.role_id = r.id
  JOIN department d ON r.department_id = d.id
  LEFT JOIN employee m ON e.manager_id = m.id;`;

  try {
    const [rows, fields] = await dbConnection.promise().query(query);
    return console.table(rows);
  } catch (error) {
    console.error(error);
  }
}

// Function to add a new employee to the database
async function insertEmployee(data) {
  const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;

  try {
    const [rows, fields] = await dbConnection.promise().query(query, data);
    return console.log(`\nAdded employee ${data[0]} ${data[1]} to the database.\n`);
  } catch (error) {
    console.error(error);
  }
}

// Function to retrieve department data from the database
async function fetchDepartments() {
  const query = `SELECT * FROM department`;

  try {
    const [rows, fields] = await dbConnection.promise().query(query);
    return console.table(rows);
  } catch (error) {
    console.error(error);
  }
}

// Function to add a new department to the database
async function insertDepartment(name) {
  const query = `INSERT INTO department (dept_name) VALUES (?)`;

  try {
    const [rows, fields] = await dbConnection.promise().query(query, [name]);
    return console.log(`\nAdded department ${name} to the database.\n`);
  } catch (error) {
    console.error(error);
  }
}

// Function to retrieve role data from the database
async function fetchRoles() {
  const query = `SELECT r.id AS role_id, r.title, d.dept_name AS department, r.salary FROM role r
  JOIN department d ON r.department_id = d.id;`;

  try {
    const [rows, fields] = await dbConnection.promise().query(query);
    return console.table(rows);
  } catch (error) {
    console.error(error);
  }
}

// Function to add a new role to the database
async function insertRole(data) {
  const query = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;

  try {
    const [rows, fields] = await dbConnection.promise().query(query, data);
    return console.log(`\nAdded role ${data[0]} to the database.\n`);
  } catch (error) {
    console.error(error);
  }
}

// Function to update an employee's role
async function updateEmployeeRole(data) {
  const query = `UPDATE employee SET role_id = ? WHERE id = ?`;

  try {
    const [rows, fields] = await dbConnection.promise().query(query, data);
    return console.log("\nEmployee role updated successfully!\n");
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  fetchEmployeeData,
  fetchDepartments,
  fetchRoles,
  insertEmployee,
  insertDepartment,
  insertRole,
  updateEmployeeRole,
};

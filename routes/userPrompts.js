const { dbConnection } = require("../config/connect");
const userPrompts = [
  {
    message: "What would you like to do?\n",
    type: "list",
    loop: false,
    choices: [
      "View All Departments",
      "Add a Department",
      "View All Roles",
      "Add a Role",
      "View All Employees",
      "Add an Employee",
      "Update Employee Role",
      "Quit",
    ],
    name: "userChoice",
  },
  {
    message: "Please enter the name of the Department that you would like to add:\n",
    type: "input",
    name: "deptName",
    when: (response) => response.userChoice === "Add a Department",
  },
  {
    message: "Please enter the name of the Role that you would like to add:\n",
    type: "input",
    name: "roleName",
    when: (response) => response.userChoice === "Add a Role",
  },
  {
    message: "Please enter the salary for the Role that you would like to add:\n",
    type: "input",
    name: "roleSalary",
    when: (response) => response.userChoice === "Add a Role",
  },
  {
    message: "Please enter the department that corresponds with the Role:\n",
    type: "list",
    loop: false,
    choices: async function () {
      const query = `SELECT dept_name, id FROM departments;`;
      try {
        const [rows, fields] = await dbConnection.promise().query(query);
        return rows.map((department) => {
          return { name: department.dept_name, value: department.id };
        });
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    name: "roleDepartment",
    when: (response) => response.userChoice === "Add a Role",
  },
  {
    message: "What is the Employee's first name?\n",
    type: "input",
    name: "employeeFirstName",
    when: (response) => response.userChoice === "Add an Employee",
  },
  {
    message: "What is the Employee's last name?\n",
    type: "input",
    name: "employeeLastName",
    when: (response) => response.userChoice === "Add an Employee",
  },
  {
    message: "What is the Employee's role?\n",
    type: "list",
    loop: false,
    choices: async function () {
      const query = `SELECT id, title FROM roles;`;
      try {
        const [rows, fields] = await dbConnection.promise().query(query);
        return rows.map((role) => {
          return { name: role.title, value: role.id };
        });
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    name: "employeeRole",
    when: (response) => response.userChoice === "Add an Employee",
  },
  {
    message: "Who is the Employee's manager?\n",
    type: "list",
    loop: false,
    choices: async function () {
      const query = `SELECT DISTINCT e.manager_id, CONCAT(em.first_name," ", em.last_name) AS managerName FROM employees e JOIN employees em ON em.id = e.manager_id;`;
      try {
        const [rows, fields] = await dbConnection.promise().query(query);
        const choices = rows.map((manager) => {
          return { name: manager.managerName, value: manager.manager_id };
        });
        choices.push({ name: "N/A", value: null });
        return choices;
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    name: "employeeManager",
    when: (response) => response.userChoice === "Add an Employee",
  },
  {
    message: "Which employee's role would you like to update?\n",
    type: "list",
    loop: false,
    choices: async function () {
      const query = `SELECT id, CONCAT(first_name," ", last_name) AS employeeName FROM employees;`;
      try {
        const [rows, fields] = await dbConnection.promise().query(query);
        return rows.map((employee) => {
          return { name: employee.employeeName, value: employee.id };
        });
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    name: "employeeToUpdate",
    when: (response) => response.userChoice === "Update Employee Role",
  },
  {
    message: "What is their new role?\n",
    type: "list",
    loop: false,
    choices: async function () {
      const query = `SELECT id, title FROM roles;`;
      try {
        const [rows, fields] = await dbConnection.promise().query(query);
        return rows.map((role) => {
          return { name: role.title, value: role.id };
        });
      } catch (error) {
        console.error(error);
        return [];
      }
    },
    name: "newRole",
    when: (response) => response.userChoice === "Update Employee Role",
  },
];

module.exports = userPrompts;

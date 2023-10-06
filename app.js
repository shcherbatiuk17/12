const mysql = require("mysql2");
const express = require("express");
const { dbConnect } = require("./config/connect");
const inquirer = require("inquirer");
const {
  fetchEmployeeData,
  fetchRoles,
  fetchDepartments,
  insertEmployee,
  insertDepartment,
  insertRole,
  updateEmployeeRole,
} = require("./routes/queries");
const userPrompts = require("./routes/userPrompts");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Functions to handle different user choices

async function handleViewAllDepartments() {
  await fetchDepartments();
  startApp();
}

async function handleViewAllRoles() {
  await fetchRoles();
  startApp();
}

async function handleViewAllEmployees() {
  await fetchEmployeeData();
  startApp();
}

async function handleAddDepartment(deptName) {
  await insertDepartment(deptName);
  startApp();
}

async function handleAddRole(roleName, salary, deptId) {
  const roleArray = [roleName, salary, deptId];
  await insertRole(roleArray);
  startApp();
}

async function handleAddEmployee(firstName, lastName, empRole, empMan) {
  const valueArray = [firstName, lastName, empRole, empMan];
  await insertEmployee(valueArray);
  startApp();
}

async function handleUpdateEmployeeRole(newRole, empToUpdate) {
  const updateArray = [newRole, empToUpdate];
  await updateEmployeeRole(updateArray);
  startApp();
}

// Main application function to prompt the user and handle their choices

async function startApp() {
  try {
    const answers = await inquirer.prompt(userPrompts);
    switch (answers.userChoice) {
      case "View All Departments":
        await handleViewAllDepartments();
        break;
      case "View All Roles":
        await handleViewAllRoles();
        break;
      case "View All Employees":
        await handleViewAllEmployees();
        break;
      case "Add a Department":
        await handleAddDepartment(answers.deptName);
        break;
      case "Add a Role":
        await handleAddRole(answers.roleName, answers.roleSalary, answers.roleDepartment);
        break;
      case "Add an Employee":
        await handleAddEmployee(
          answers.employeeFirstName,
          answers.employeeLastName,
          answers.employeeRole,
          answers.employeeManager
        );
        break;
      case "Update Employee Role":
        await handleUpdateEmployeeRole(answers.newRole, answers.employeeToUpdate);
        break;
      default:
        console.log("\nGoodbye");
        process.exit();
    }
  } catch (error) {
    console.error(error);
  }
}

// Start the server and the application

app.listen(PORT, () => {
  console.info(`Server listening on PORT ${PORT}`);
  startApp();
});

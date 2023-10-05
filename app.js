const express = require("express");
const { dbConnect } = require("./config/connect");
const inquirer = require("inquirer");
const {
  fetchEmployeeData,
  fetchRoles,
  fetchDepartments,
  insertEmployee,
  insertDepartment, // Add a comma here
  insertRole, // Add a comma here
  updateEmployeeRole,const express = require("express");
  const { dbConnect } = require("./config/connect");
  const inquirer = require("inquirer");
  const {
    fetchEmployeeData,
    fetchRoles,
    fetchDepartments,
    insertEmployee,
    insertDepartment, // Function to insert a new department into the database
    insertRole, // Function to insert a new role into the database
    updateEmployeeRole,
  } = require("./routes/queries");
  const userPrompts = require("./routes/userPrompts");
  const PORT = process.env.PORT || 3001;
  
  const app = express();
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json();
  
  // Functions to handle different user choices
  
  async function handleViewAllDepartments() {
    await fetchDepartments(); // Function to retrieve and display all departments
    startApp();
  }
  
  async function handleViewAllRoles() {
    await fetchRoles(); // Function to retrieve and display all roles
    startApp();
  }
  
  async function handleViewAllEmployees() {
    await fetchEmployeeData(); // Function to retrieve and display employee data
    startApp();
  }
  
  async function handleAddDepartment(deptName) {
    await insertDepartment(deptName); // Function to insert a new department into the database
    startApp();
  }
  
  async function handleAddRole(roleName, salary, deptId) {
    const roleArray = [roleName, salary, deptId];
    await insertRole(roleArray); // Function to insert a new role into the database
    startApp();
  }
  
  async function handleAddEmployee(firstName, lastName, empRole, empMan) {
    const valueArray = [firstName, lastName, empRole, empMan];
    await insertEmployee(valueArray); // Function to insert a new employee into the database
    startApp();
  }
  
  async function handleUpdateEmployeeRole(newRole, empToUpdate) {
    const updateArray = [newRole, empToUpdate];
    await updateEmployeeRole(updateArray); // Function to update an employee's role
    startApp();
  }
  
  // Main application function to prompt user and handle their choices
  
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
          await handleAddDepartment(answers.departmentName);
          break;
        case "Add a Role":
          await handleAddRole(answers.roleTitle, answers.roleSalary, answers.roleDepartment);
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
  
} = require("./routes/queries");
const userPrompts = require("./routes/userPrompts");
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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
  await insertDepartment(deptName); // Corrected the function name
  startApp();
}

async function handleAddRole(roleName, salary, deptId) {
  const roleArray = [roleName, salary, deptId];
  await insertRole(roleArray); // Corrected the function name
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
        await handleAddDepartment(answers.departmentName);
        break;
      case "Add a Role":
        await handleAddRole(answers.roleTitle, answers.roleSalary, answers.roleDepartment);
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

app.listen(PORT, () => {
  console.info(`Server listening on PORT ${PORT}`);
  startApp();
});

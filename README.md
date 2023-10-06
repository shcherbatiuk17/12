# Employee Management CLI Application

## Description

This command-line application allows you to manage departments, roles, and employees in your organization.

## Features

- View all departments, roles, and employees.
- Add new departments, roles, and employees.
- Update an employee's role.
## Installation
Video walkthrough on how to use and initialize the program:
https://drive.google.com/file/d/1QStAes3Ujkk6nzMLS-qWeNAoKU5JcYOU/view
1. Clone the repository to your local machine:

   ```shell
   git clone https://github.com/shcherbatiuk17/12.git
2. Navigate to the RMS Folder: Open your terminal or command prompt and navigate to the root directory of your project.

3. Initialize MySQL Database:
    Start by ensuring your MySQL server is up and running.
Next, run the following command to create the initial database structure. This assumes you have a file named schema.sql in a folder called db
    mysql -u your_mysql_user -p < db/schema.sql
 Replace your_mysql_user with your actual MySQL username. You will be prompted to enter your MySQL password.
After the schema has been created, you can populate it with sample data by running the following command, assuming you have a file named seeds.sql in the db folder:
    mysql -u your_mysql_user -p < db/seeds.sql
Again, replace your_mysql_user with your actual MySQL username, and you'll be prompted for your MySQL password.
4. Set Up Environment Variables:
    Rename the .env.Example file in your project to .env.
Open the .env file using a text editor and set your MySQL user and password. It should look something like this:
    DB_USER=your_mysql_user
    DB_PASSWORD=your_mysql_password
    DB_NAME=your_database_name
    DB_HOST=localhost
    DB_PORT=3306
Replace your_mysql_user, your_mysql_password, and your_database_name with your actual MySQL credentials and the name of your database.

5. Install Node.js Dependencies:
In the terminal, make sure you are still in the root directory of your R project.
Run the following command to install all the necessary Node.js packages defined in your package.json:
    npm install

6. Initialize the Application:
After the packages are installed, start your Node.js application with:
    node app.js
This will run your Node.js server, and your  application should be accessible.
Make sure your MySQL server is running, and you have created the database correctly with the schema.sql and seeds.sql scripts. Additionally, ensure that your .env file contains the correct MySQL user and password information. After completing these steps, your Restaurant Management System application should be ready to use.
## License 
This project is licensed under the MIT license. See the LICENSE file for details
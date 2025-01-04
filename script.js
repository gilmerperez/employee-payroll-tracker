// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  // TODO: Get user input to create and return an array of employee objects
  // Create empty array to hold employee objects
  const employees = [];
  // Condition set to true so that the function will start
  let addAnother = true;
  // While condition is true, which it will always be true in the beginning, user will fill out information
  while (addAnother) {
    const firstName = prompt("Enter first name:");
    const lastName = prompt("Enter last name:");
    let salary = Number(prompt("Enter salary:"));
    // Check to see if data entered in salary is not a number, if it's not, it will default to 0
    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary = Number(salary);
    }
    // Create employee object with given information and push it to the array
    employees.push({
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    });
    // Asks if another employee will be added to array
    addAnother = confirm("Do you want to add another employee?");
  };
  return employees;
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  // * HINT: What does the toFixed method do?
  let totalSalary = 0;
  // For loop to add all of the salaries to the variable totalSalary
  for (let i = 0; i < employeesArray.length; i++) {
    totalSalary = totalSalary + Number(employeesArray[i].salary);
  }
  // Once we have total salary, we divide by the total number of employees to get the average, make sure it has 2 decimal points, then display it on the console
  const averageSalary = (totalSalary / employeesArray.length).toFixed(2);
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${averageSalary}`);
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  // Takes the length of the array, times a number from 0 to but not including 1, and rounds it to the nearest whole number. And assigns this index to randomEmployeeNumber
  const randomEmployeeNumber = Math.floor(Math.random() * employeesArray.length);
  // This index then gets assigned to the employeesArray and that will give us a random employee whcih we call randomEmployee
  const randomEmployee = employeesArray[randomEmployeeNumber];
  // We then log the randomEmployee first and last name using template literals
    console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);

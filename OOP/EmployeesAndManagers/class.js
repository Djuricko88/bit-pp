/*Employees and Managers
1. Create constructor functions with properties representing the following:
○ Person: name, surname
○ Employee: inherits Person and has job and salary
○ Developer: inherits from Employee and has specialization
○ Manager: inherits from Employee and has department
2. All developers should inherit method:
○ getSpecialization which prints out the name of the specialization
3. All managers should inherit methods:
○ getDepartment which prints out the name of the department
○ changeDepartment which sets the department value to the given value
4. All employees should inherit methods:
○ getData which returns the name, surname and salary
○ getSalary which prints out the salary
○ increaseSalary which increases the salary by 10% */


/* Person object */
class Person {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
  }
}

/* Employee extends Person object */
class Employee extends Person {
  constructor(name, lastname, job, salary) {
    super(name, lastname);
    this.name = name;
    this.lastname = lastname;
    this.job = job;
    this.salary = salary;
  }

  getData() {
    return this.name + " " + this.lastname + " " + this.salary;
  };

  getSalary() {
    console.log("Salary: " + this.salary);
  };

  increaseSalary() {
    this.salary = this.salary * 1.1;
    return this.salary;
  };
}

/* Developer extends Employee object */
class Developer extends Employee {
  constructor(name, lastname, job, salary, specilization) {
    super(name, lastname, job, salary);
    this.specilization = specilization;
  }

  getSpecilization() {
    console.log("Specilization: " + this.specilization);
  };
}

/* Manager extends Employee object */
class Manager extends Employee {
  constructor(name, lastname, job, salary, department) {
    super(name, lastname, job, salary);
    this.department = department;
  };

  getDepartment() {
    console.log("Department: " + this.department);
  };

  changeDepartment(newDepartment) {
    this.department = newDepartment;
    console.log("Mangers new Department is: " + this.department);
  };
}

/* creating instances */
var developer = new Developer("Laza", "Lazic", "Coder", 99999, "JavaScript");
var manager = new Manager("Pera", "Peric", "Engeneer", 199999, "FrontEnd");
var employee = new Employee("Marko", "Markovic", "Coder", 60000);

/* display pethods and datas */
developer.getSpecilization();
manager.getDepartment();
manager.changeDepartment("Full Stack");

console.log(employee.getData());
employee.getSalary();
console.log(employee.increaseSalary());
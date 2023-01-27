/* creating Person object */
function Person(name, lastname) {
  this.name = name;
  this.lastname = lastname;
};

/* Employee inheritance Person object */
function Employee(name, lastname, job, salary) {
  Person.call(this, name, lastname);
  this.job = job;
  this.salary = salary;
}
Employee.prototype = Object.create(Person.prototype);
Employee.prototype.constructor = Employee;

/* Employee methods */
Employee.prototype.getData = function () {
  return this.name + " " + this.lastname + " " + this.salary;
};
Employee.prototype.getSalary = function () {
  console.log("Salary: " + this.salary);
};
Employee.prototype.increaseSalary = function () {
  this.salary = this.salary * 1.1;
  return this.salary;
};

/* Developer inheritance Employee object */
function Developer(name, lastname, job, salary, specilization) {
  Employee.call(this, name, lastname, job, salary);
  this.specilization = specilization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

/* Developer methods */
Developer.prototype.getSpecilization = function () {
  console.log("Specilization: " + this.specilization);
};

/* Manager inheritance Employee object */
function Manager(name, lastname, job, salary, department) {
  Employee.call(this, name, lastname, job, salary);
  this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

/* Manager methods */
Manager.prototype.getDepartment = function () {
  console.log("Department: " + this.department);
};
Manager.prototype.changeDepartment = function (newDepartment) {
  this.department = newDepartment
  console.log("Managers new Department is: " + this.department);
};

/* creating instances */
var developer = new Developer("Laza", "Lazic", "Coder", 99999, "JavaScript");
var manager = new Manager("Pera", "Peric", "Engeneer", 199999, "FrontEnd");
var employee = new Employee("Marko ", "Markovic", "Coder", 60000);

/* display pethods and datas */
developer.getSpecilization();
manager.getDepartment();
manager.changeDepartment("Full Stack");

console.log(employee.getData());
employee.getSalary();
console.log(employee.increaseSalary());
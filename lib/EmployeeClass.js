class Employee {
  constructor(name, id, email) {
    this.Name = name;
    this.Id = id;
    this.Email = email;
    this.Role = "employee";
  }
  getName() {
    return this.Name;
  }
  getId() {
    return this.Id;
  }
  getEmail() {
    return this.Email;
  }
  getRole() {
    return this.Role;
  }
}

module.exports = Employee;

// const employee = new Employee("Scott", 1, "pharaohnof.software@gmail.com");

// console.log(employee);

// console.log(employee.getEmail());

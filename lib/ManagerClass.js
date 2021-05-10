const Employee = require("./EmployeeClass");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.Office = office;
    this.Role = "Manager";
  }

  getOffice() {
    return this.Office;
  }
}

module.exports = Manager;

const manager = new Manager("Matthew", 2, "manager.email@example.com", 1111);

console.log(manager);

console.log(manager.getId());

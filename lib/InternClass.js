const Employee = require("./EmployeeClass");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.School = school;
    this.Role = "Intern";
  }
  getSchool() {
    return this.School;
  }
}

module.exports = Intern;

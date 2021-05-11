const Employee = require("./EmployeeClass.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.Github = github;
    this.Role = "Engineer";
  }
  getGithub() {
    return this.Github;
  }
}

module.exports = Engineer;

// const engineer = new Engineer("pharaoh", 3, "this@that.com", "pharaohnof");

// console.log(engineer);

// console.log(engineer.getName());

// console.log(engineer.getEmail());

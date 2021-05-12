const Employee = require("../lib/EmployeeClass");

describe("Employee", () => {
  describe("Initilization", () => {
    it("When getRole() is called it returns 'Employee'", () => {
      let text = "Employee";
      const obj = new Employee();
      expect(obj.getRole()).toEqual(text);
    });
    it("when getName() is called it returns 'Name Test'", () => {
      let name = "Name Test";
      const obj = new Employee();
      expect(obj.getName()).toEqual(this.name);
    });
  });
});

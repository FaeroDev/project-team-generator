const Manager = require("../lib/ManagerClass");

describe("Manager", () => {
  describe("Initialization", () => {
    it("when getRole() is called it returns 'Team Manager'", () => {
      let text = "Team Manager";
      const obj = new Manager();
      expect(obj.getRole()).toEqual(text);
    });
    it("when getOffice() is called it returns '1234'", () => {
      let office = 1234;
      const obj = new Manager();
      expect(obj.getOffice()).toEqual(this.Office);
    });
  });
});

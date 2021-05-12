const Intern = require("../lib/InternClass");

describe("Intern", () => {
  describe("Initialization", () => {
    it("when getRole() is called it returns 'Intern'", () => {
      let text = "Intern";
      const obj = new Intern();
      expect(obj.getRole()).toEqual(text);
    });
    it("when getSchool() is called it returns 'Test School'", () => {
      let school = "Test School";
      const obj = new Intern();
      expect(obj.getSchool()).toEqual(this.School);
    });
  });
});
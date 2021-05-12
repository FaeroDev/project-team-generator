const Engineer = require("../lib/EngineerClass");

describe("Engineer", () => {
  describe("Initialization", () => {
    it("when getRole() is called it returns 'Engineer'", () => {
      let text = "Engineer";
      const obj = new Engineer();
      expect(obj.getRole()).toEqual(text);
    });
    it("when getGithub() is called it returns 'TEST'", () => {
      let github = 'TEST';
      const obj = new Engineer();
      expect(obj.getGithub()).toEqual(this.Github);
    });
  });
});
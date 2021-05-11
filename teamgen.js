console.log("teamgen fired");

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const fillHTML = require("./src/fillHTML.js");
const styleFill = require("./src/styleFill.js");

const fsMkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

let teamArray = [];
let userAnswers;

const userInput = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "addTeamMember",
      message: "Add an Engineer or Intern?",
      choices: ["Yes", "No"],
    })

    .then((answer) => {
      switch (answer.addTeamMember) {
        case Yes:
          selectInput();
          break;
        case No:
          console.log("answered no to addTeamMember");
          break;
      }
    });
};

const managerInput = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "Enter Team Manager Name:",
    },
    {
      type: "input",
      name: "ID",
      message: "Enter Team Manager ID number:",
    },
    {
      type: "input",
      name: "email",
      message: "Enter Team Manager Email Address:",
    },
    {
      type: "input",
      name: "office",
      message: "Enter Team Manager Office Number:",
    },
  ]);
};

// const init = () => {
// .then((answers) => writeFile('test.html', fillHTML(answers)))

userInput()
  // .then(() => {
  //   fsMkdir("./dist", { recursive: true }, (err) =>
  //     err
  //       ? console.log(err)
  //       : console.log("Successfully created dist directory")
  //   );
  // })
  .then((answers) => {
    //   fsMkdir("./dist", { recursive: true }, (err) =>
    //   err
    //     ? console.log(err)
    //     : console.log("Successfully created dist directory")
    // );

    fsMkdir("./dist", { recursive: true });
    console.log("Successfully created dist directory");

    writeFile("./dist/team.html", fillHTML(answers));
    this.Answers = answers;
    userAnswers = this.Answers;
    console.log(userAnswers);

    console.log(`
           YOU ENTERED:
    `);
    console.log(answers);
    console.log(`
      ----------------------------------------------------------------
      GENERATED:
       ./dist/team-style.css, and
       ./dist/team.html
       IN CURRENT DIRECTORY`);
  })

  .then(() => {
    writeFile("./dist/team-style.css", styleFill);
  })

  .catch((err) => console.error(err));
// };

// init();

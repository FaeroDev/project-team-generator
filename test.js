console.log("teamgen fired");

const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

const Manager = require("./lib/ManagerClass.js");
const Engineer = require("./lib/EngineerClass.js")
const Intern = require("./lib/InternClass.js")

const fillHTML = require("./src/fillHTML.js");
const styleFill = require("./src/styleFill.js");

const fsMkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

let teamArray = [];
let userAnswers;

const managerInput = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Team Manager Name:",
      },
      {
        type: "input",
        name: "id",
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
    ])

    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      console.log(manager);
      teamArray.push(manager);
      console.log(teamArray);
      addMemberQuery();
    });
};

const engineerInput = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Engineer Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Engineer ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Engineer Email Address:",
      },
      {
        type: "input",
        name: "github",
        message: "Enter Engineer GitHub ID:",
      },
    ])

    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github,
      );
      console.log(engineer);
      teamArray.push(engineer);
      console.log(teamArray);
      addMemberQuery();
    });
};


const addMemberQuery = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "addTeamMember",
      message: "Add an Engineer or Intern?",
      choices: ["Yes", "No"],
    })

    .then((answer) => {
      switch (answer.addTeamMember) {
        case "Yes":
          selectInput();
          break;
        case "No":
          console.log("answered no to addTeamMember");
          break;
      }
    })
    .catch((err) => console.error(err));
};

const selectInput = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "selectRole",
      message: "Select member to add (or abort adding a member):",
      choices: ["Engineer", "Intern", "ABORT"],
    })
    .then((answer) => {
      switch (answer.selectRole) {
        case "Engineer":
          console.log("CHOSE ENGINEER");
          engineerInput();
          break;

        case 'Intern':
          console.log("CHOSE INTERN");
          // internInput();
          break;

        case "ABORT":
          addMemberQuery()
          break;
      }
    });
};

managerInput();

// // const init = () => {
// // .then((answers) => writeFile('test.html', fillHTML(answers)))

// userInput()
//   // .then(() => {
//   //   fsMkdir("./dist", { recursive: true }, (err) =>
//   //     err
//   //       ? console.log(err)
//   //       : console.log("Successfully created dist directory")
//   //   );
//   // })
//   .then((answers) => {
//     //   fsMkdir("./dist", { recursive: true }, (err) =>
//     //   err
//     //     ? console.log(err)
//     //     : console.log("Successfully created dist directory")
//     // );

//     fsMkdir("./dist", { recursive: true });
//     console.log("Successfully created dist directory");

//     writeFile("./dist/team.html", fillHTML(answers));
//     this.Answers = answers;
//     userAnswers = this.Answers;
//     console.log(userAnswers);

//     console.log(`
//            YOU ENTERED:
//     `);
//     console.log(answers);
//     console.log(`
//       ----------------------------------------------------------------
//       GENERATED:
//        ./dist/team-style.css, and
//        ./dist/team.html
//        IN CURRENT DIRECTORY`);
//   })

//   .then(() => {
//     writeFile("./dist/team-style.css", styleFill);
//   })

//   .catch((err) => console.error(err));
// };

// init();

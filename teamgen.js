console.log("PROJECT TEAM GENERATOR STARTED");

const inquirer = require("inquirer");

const Manager = require("./lib/ManagerClass.js");
const Engineer = require("./lib/EngineerClass.js");
const Intern = require("./lib/InternClass.js");

let teamArray = [];

module.exports = teamArray;

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
      let manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office
      );
      // console.log(manager);
      teamArray.push(manager);
      // console.log(teamArray);
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
      let engineer = new Engineer(
        answers.name,
        answers.id,
        answers.email,
        answers.github
      );
      // console.log(engineer);
      teamArray.push(engineer);
      // console.log(teamArray);
      addMemberQuery();
    });
};

const internInput = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Intern Name:",
      },
      {
        type: "input",
        name: "id",
        message: "Enter Intern ID number:",
      },
      {
        type: "input",
        name: "email",
        message: "Enter Intern Email Address:",
      },
      {
        type: "input",
        name: "school",
        message: "Enter Intern School:",
      },
    ])

    .then((answers) => {
      let intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school
      );
      // console.log(intern);
      teamArray.push(intern);
      // console.log(teamArray);
      addMemberQuery();
    });
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

        case "Intern":
          console.log("CHOSE INTERN");
          internInput();
          break;

        case "ABORT":
          addMemberQuery();
          break;
      }
    });
};

const addMemberQuery = () => {
  console.log(`YOUR TEAM CONSISTS OF:
  `);
  console.log(teamArray);
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
          // CHANGE TO 1 FROM 0 ----------------------------------------------------------------
          if (teamArray.length > 1) {
            const fillHTML = require("./src/fillHTML.js");
            const writeFiles = require("./src/writeFiles.js");
          } else {
            console.log(
              "A TEAM MUST CONSIST OF MORE THAN ONE MEMBER - FILES NOT WRITTEN"
            );
          }

          break;
      }
    })
    .catch((err) => console.error(err));
};

managerInput();

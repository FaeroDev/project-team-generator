const fs = require("fs");
const util = require("util");

const fillHTML = require("./fillHTML.js");
const styleFill = require("./styleFill.js");
const teamArray = require("../test");

const fsMkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

// let userAnswers;
// let teamArray = [
//     Manager{
//       Name: '',
//       Id: 'scott',
//       Email: 'PAwak',
//       Role: 'Team Manager',
//       Office: 'djhksf'
//     },Engineer{
//       Name: 'Jim',
//       Id: 'Jiones',
//       Email: 'Jimmmmmeeeeee',
//       Role: 'Engineer',
//       Github: 'phara'
//     }
//   ];



// // const init = () => {
// // .then((answers) => writeFile('test.html', fillHTML(answers)))

function writeFiles(answers){
  // .then(() => {
  //   fsMkdir("./dist", { recursive: true }, (err) =>
  //     err
  //       ? console.log(err)
  //       : console.log("Successfully created dist directory")
  //   );
  // })
//   .then((answers) => {
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
  }
//   )

  (() => {
    writeFile("./dist/team-style.css", styleFill);
  })

//   .catch((err) => console.error(err));
// };
// writeFiles(teamArray)
// init();
module.exports =writeFiles()
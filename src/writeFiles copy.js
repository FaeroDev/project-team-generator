const fs = require("fs");
const util = require("util");

const fillHTML = require("./fillHTML.js");
const styleFill = require("./styleFill.js");
const teamArray = require("../teamgen.js");

const fsMkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);


            
console.log('WRITEFILES.JS FIRED')
fsMkdir("./dist", { recursive: true })


.then(() => {
  // module.exports = teamArray;

  //   fsMkdir("./dist", { recursive: true }, (err) =>
  //   err
  //     ? console.log(err)
  //     : console.log("Successfully created dist directory")
  // );

  // fsMkdir("./dist", { recursive: true });
  console.log("Successfully created dist directory");
  // console.log(teamArray)

  writeFile("./dist/team.html", fillHTML(teamArray));
  // this.Answers = answers;
  // userAnswers = this.Answers;
  // console.log(userAnswers);

  console.log(`
         YOU ENTERED:
  `);
  // console.log(answers);
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

// const writeFiles = require("./src/writeFiles.js")

// writeFiles(teamArray);
// console.log("writeFiles will be invoked here")
// module.exports =writeFiles()
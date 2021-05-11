const fs = require("fs");
const util = require("util");

const fillHTML = require("./fillHTML.js");
const styleFill = require("./styleFill.js");
const teamArray = require("../teamgen.js");

const fsMkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

console.log("WRITEFILES.JS FIRED");

fsMkdir("./dist", { recursive: true })
  .then(() => {
    writeFile("./dist/team.html", fillHTML(teamArray));
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

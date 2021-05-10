console.log("teamgen fired");

const fs = require("fs");

const inquirer = require("inquirer");
const util = require("util");
let userAnswers;
const fsMkdir = util.promisify(fs.mkdir);
const writeFile = util.promisify(fs.writeFile);

const userInput = () => {
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

const fillHTML = (answers) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="description" content="My Project Team" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0"
        crossorigin="anonymous"
      />
      <link rel="stylesheet" href="./team-style.css" />
      <title>My Project Team</title>
    </head>
    <body>
      <header class="jumbotron bg-danger p-5 text-white shadow bg-gradient">
        <h1 class="display-3">My Project Team</h1>
        <p class="lead">A simple team profiler</p>
        <p id="currentDay" class="lead"></p>
      </header>
      <main class="container col-12">
        <row class="row justify-content-center">
  
          <card class="col-sm-6 col-xl-4 justify-content-center p-3">
            <div class="card justify-content-center bg-primary text-white shadow bg-gradient"> 
              <!-- <img src="..." class="card-img-top" alt="..." /> -->
              <div class="card-body">
                <h4 class="card-title">${answers.name}</h4>
                <h6 class="card-text">
                  Team Manager
                </h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${answers.ID}</li>
                <li class="list-group-item">Email: <a href= "mailto:${answers.email}">${answers.email}</a></li>
                <li class="list-group-item">Office Number: ${answers.office}</li>
              </ul>
            </div>
          </card>

         <!-- <card class="col-sm-6 col-xl-4 justify-content-center p-3">
          <div class="card justify-content-center bg-primary text-white shadow bg-gradient"> 
            <div class="card-body">
              <h4 class="card-title">John Doe</h4>
              <h5 class="card-text">
                Engineer
              </h5>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">An item</li>
              <li class="list-group-item">A second item</li>
              <li class="list-group-item">A third item</li>
            </ul>
          </div>
        </card> -->

  
          
  
        </row>
      </main>
      <script src=""></script>
    </body>
  </html>
  `;
const styleFill = `.jumbotron { /*MIMICS DEPRECATED JUMBOTRON FROM PREVIOUS BS VERSIONS TO BS-5 AND UP*/
    padding: 4rem 2rem;
    margin-bottom: 2rem;
    border-radius: 0;
    text-align:center;
    background-color: transparent;
    color: black;
    /* border-bottom: 10px solid black; */
  }
  `;
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

  fsMkdir("./dist", { recursive: true })
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

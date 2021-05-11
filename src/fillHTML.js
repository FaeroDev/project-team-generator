const teamArray = require("../test.js");

let cardArray = [];
// let officeString = `Office Number: `
// let githubString = `Github: `
// let schoolString = `School: `

const makeFile = new Promise((resolve, reject) => {
  if (teamArray.length > 0) {
    return resolve(teamArray);
  } else {
    const issue = new Error("TeamArray promise rejected");
    reject(issue);
  }
});

function fillCards(array) {
  console.log("fillCards fired");
  console.log(teamArray);

  for (const member of array) {
    let officeString = `${member.Office}`;
    let githubString = `Github: <a href="https://github.com/${member.Github}">${member.Github}</a>`;
    let schoolString = `School: ${member.School}`;

    function varFill(member) {
      if (member.Office) {
        return `Office Number: ${member.Office}`;
      } else if (member.Github) {
        return `Github: <a href="https://github.com/${member.Github}">${member.Github}</a>`;
      } else if (member.School) {
        return `School: ${member.School}`;
      } else {
        console.log(
          "switche fail --------------------------------------------------------"
        );
      }
      // switch (member) {
      //   case officeString:
      //     return `Office Number: ${member.Office}`
      //     break;

      //   default:
      //     console.log('------------------swicth failed------------------')
      //     break;
      // }
    }

    // let officeString = `${member.Office}`
    // let githubString = `Github: ${member.Github}`
    // let schoolString = `School: ${member.School}`

    cardArray.push(
      `          <card class="col-sm-6 col-xl-4 justify-content-center p-3">
      <div class="card justify-content-center bg-primary text-white shadow bg-gradient"> 
        <!-- <img src="..." class="card-img-top" alt="..." /> -->
        <div class="card-body">
          <h4 class="card-title">${member.Name}</h4>
          <h6 class="card-text">
            ${member.Role}
          </h6>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${member.Id}</li>
          <li class="list-group-item">Email: <a href= "mailto:${
            member.Email
          }">${member.Email}</a></li>
          <li class="list-group-item"> ${varFill(member)}</li>
        </ul>
      </div>
    </card>
`
    );
  }
}

// makeFile

// .then (fillCards(teamArray))
// .then (fillHTML())

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

        ${cardArray}


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

makeFile.then(fillCards(teamArray)).then(fillHTML());

module.exports = fillHTML;

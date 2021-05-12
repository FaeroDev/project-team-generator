// const teamArray = require("../teamgen.js");
const teamArray = require("../mock.js");

let cardArray = [];

function fillCards(array) {
  console.log("fillCards fired");

  for (const member of array) {
    function varFill(member) {
      if (member.Office) {
        return `Office Number: ${member.Office}`;
      } else if (member.Github) {
        return `Github: <a href="https://github.com/${member.Github}">${member.Github}</a>`;
      } else if (member.School) {
        return `School: ${member.School}`;
      } else {
        console.log(
          "VARFILL FAILED --------------------------------------------------------"
        );
      }
    }

    cardArray.push(
    `<!-- ----------INJECTED TEAM MEMBER------------ -->
    <card class="col-sm-5 col-xl-3 justify-content-center p-3">
      <div class="card justify-content-center bg-primary text-white shadow bg-gradient"> 
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
    </card> <!--`+'-->'
    );
  }
}

fillCards(teamArray);


const fillHTML = () =>
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
      <main class="container p-0 col-12">
        <row class="row justify-content-center">

        ${cardArray}
        
        </row>
      </main>
      <script src=""></script>
    </body>
  </html>
  `;
// fillCards(teamArray);
module.exports = fillHTML;

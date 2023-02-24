// function generateHTML(fileName, response) {
//       fs.writeFile(fileName, response, (err) =>
//         err ? console.error(err) : console.log(response)
//       );
// }

const Manager = require("../lib/Manager");

function managerCard(manager) {
  return `<div class="card" id="manager" style="margin: auto;
  width: 80%; text-align: center; padding: 5px; background-color: #b7b7b9; border: none">
  <ul class="list-group list-group-flush">
    <li
      class="list-group-item"
      style="
        font-size: 300%;
        background-color: #5205a9;
        color: black;
      "
    >
      ${manager.name}
    </li>
    <li
      class="list-group-item"
      style="font-size: 150%; background-color: #720e9e; color: Black"
    >
      ${manager.getRole()}
    </li>
    <li
      class="list-group-item"
      style="font-size: 120%; background-color: #800080; color: Black"
    >
      ID: ${manager.id}
    </li>
    <li
      class="list-group-item"
      style="font-size: 120%; background-color: #dda0dd; color: Black"
    >
      Email: <a href="mailto:${manager.email}">${manager.email}</a>
    </li>
    <li
      class="list-group-item"
      style="font-size: 120%; background-color: #d8bfd8; color: Black"
    >
      Office number: ${manager.officeNumber}
    </li>
  </ul>
</div>`;
}

function engineerCards(engineer) {
return `<div
  class="card"
  id="engineer"
  style="float: left; width: 25%; text-align: center; margin: auto; text-align: center; padding: 5px; background-color: #b7b7b9; border: none" 
>
  <ul class="list-group list-group-flush">
    <li
      class="list-group-item"
      style="font-size: 200%; background-color: #febe10; color: black "
    >
      ${engineer.name}
    </li>
    <li
      class="list-group-item"
      style="font-size: 120%; background-color: #ffc72c; color: black"
    >
      ${engineer.getRole()}
    </li>
    <li
      class="list-group-item"
      style="font-size: 100%; background-color: #ffd700; color: black"
    >
      ID: ${engineer.id}
    </li>
    <li
      class="list-group-item"
      style="font-size: 100%; background-color: #ffff00; color: black"
    >
      Email: <a href="mailto:${engineer.email}">${engineer.email}</a>
    </li>
    <li
      class="list-group-item"
      style="font-size: 100%; background-color: #f0e68c; color: black"
    >
      GitHub: <a href=https://github.com/${engineer.gitHub}>${engineer.gitHub}</a>
    </li>
  </ul>
</div>`;
}

function internCards(intern) {
  return `<div
  class="card"
  id="intern"
  style="float: left; width: 25%; text-align: center; margin: auto; text-align: center; padding: 5px; background-color: #b7b7b9; border: none"
>
  <ul class="list-group list-group-flush">
    <li
      class="list-group-item"
      style="font-size: 200%; background-color: #ff00ff; color: black"
    >
      ${intern.name}
    </li>
    <li
      class="list-group-item"
      style="font-size: 120%; background-color: #ff00bf; color: black"
    >
      ${intern.getRole()}
    </li>
    <li
      class="list-group-item"
      style="font-size: 100%; background-color: #f9629f; color: black"
    >
      ID: ${intern.id}
    </li>
    <li
      class="list-group-item"
      style="font-size: 100%; background-color: #ffc0cb; color: black"
    >
      Email: <a href="mailto:${intern.email}">${intern.email}</a>
    </li>
    <li
      class="list-group-item"
      style="font-size: 100%; background-color: #eec0c8; color: black"
    >
      School Name: ${intern.school}
    </li>
  </ul>
</div>`;
}

function generateHTML(members) {
  const part1 = `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Team</title>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      />
    </head>
  
    <body style="background-color: #b7b7b9">
      <h1
        style="
          text-align: center;
          font-size: 400%;
          background-color: #b7b7b9;
          color: black;
        "
      >
        My Team
      </h1>`;

  const managerPart = managerCard(members[0]);

  const engineers = members.filter((member) => member.getRole() === "Engineer");

  let engineerPart = "";
  for (let i = 0; i < engineers.length; i++) {
    const engineerElement = engineerCards(engineers[i]);
    engineerPart += engineerElement;
  }

  const interns = members.filter((member) => member.getRole() === "Intern");

  let internPart = "";
  for (let i = 0; i < interns.length; i++) {
    const internElement = internCards(interns[i]);
    internPart += internElement;
  }

  const partEnd = `<script
      src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
      integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
      integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
      integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
      crossorigin="anonymous"
    ></script>

  </body>

</html>`;

  return [part1, managerPart, engineerPart, internPart, partEnd];
}

module.exports = generateHTML;

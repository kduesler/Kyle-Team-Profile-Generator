const inquirer = require("inquirer");
const fs = require('fs');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

const managerQuestion = [
  {
    type: "input",
    name: "name",
    message: "Enter the team manager's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the team manager's employee ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the team manager's email address.",
  },
  {
    type: "input",
    name: "offNum",
    message: "Enter the team manager's office number.",
  },
];

const menuQuestion = [
  {
    type: "list",
    name: "menu",
    message: " Next, I want to ",
    choices: [
      "add an engineer.",
      "add an intern.",
      new inquirer.Separator(),
      "finish building my team.",
    ],
  },
];

const engineerQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the engineer's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the engineer's employee ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the engineer's email address.",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter the engineer's GitHub username.",
  },
];

const internQuestions = [
  {
    type: "input",
    name: "name",
    message: "Enter the intern's name.",
  },
  {
    type: "input",
    name: "id",
    message: "Enter the intern's employee ID.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter the intern's email address.",
  },
  {
    type: "input",
    name: "school",
    message: "Enter the intern's school name.",
  },
];

const members = [];

function init() {
  inquirer.prompt(managerQuestion).then((response) => {
    const manager = new Manager(
      response.name,
      response.id,
      response.email,
      response.offNum
    );
    members.push(manager);
    menu();
  });
}

init();

function menu() {
  inquirer.prompt(menuQuestion).then((response) => {
    if (response.menu === "add an engineer.") {
      inquirer.prompt(engineerQuestions).then((response) => {
        const engineer = new Engineer(
          response.name,
          response.id,
          response.email,
          response.gitHub
        );
        members.push(engineer);
        menu();
      });
    } else if (response.menu === "add an intern.") {
      inquirer.prompt(internQuestions).then((response) => {
        const intern = new Intern(
          response.name,
          response.id,
          response.email,
          response.school
        );
        members.push(intern);
        menu();
      });
    } else {
      // console.log(members[0])
      const htmlString = generateHTML(members).join("");
      console.log(htmlString);
      //write htmlString to file
      fs.writeFile('directory.html', htmlString, (err) =>
  err ? console.error(err) : console.log('Success!')
);
    }
  });
}

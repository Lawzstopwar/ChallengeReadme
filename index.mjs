import inquirer from 'inquirer';
import fs from "fs/promises";
//const inquirer = require("inquirer");
//const fs = require ("fs");

function generateLicenseBadge(license){

  if (license == "BSD 3-Clause License")
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

  if (license ==  "Apache 2.0 License")
  return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  if (license == "Boost Software License 1.0")
  return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`

}

let {
  projectTitle,
  description,
  contents,
  installation,
  usage,
  license, 
  contributing, 
  tests, 
  email, 
  github
} = inquirer.prompt([



{
  type: 'input',
  name: 'title',
  message: "Project title?",
},

{
  type: 'input',
  name: 'description',
  message: "Project description?",
},

{
  type: 'input',
  name: 'contents',
  message: "Table of contents?",
},

{
  type: 'input',
  name: 'installation',
  message: "installation instructions?",
},

{
  type: 'input',
  name: 'usage',
  message: "The usage of the project?",
},

{
  type: 'list',
  name: 'license',
  message: "License is required?",
  choices:['BSD 3-Clause License', 'Apache 2.0 License', 'Boost Software License 1.0',],
},

{
  type: 'input',
  name: 'contributing',
  message: "Contributing info?",
},
{
  type: 'input',
  name: 'Test',
  message: "How to run test?",
},

{
  type: 'input',
  name: 'email',
  message: "For further info(email)?",
},

{
  type: 'input',
  name: 'github',
  message: "Github url?",
},

]);

let readmeText = `

# Project title
${projectTitle}

# Description
${description}

## (Table of Contents)
${contents}

### Installation
${installation}

### Usage
${usage}

### License
${license}
${generateLicenseBadge(license)}


### Contributing
${contributing}

### Tests
${tests}

### Questions
${email}


## Deploy Link
${github}`;


console.log (projectTitle);


fs.writeFile("README.md",readmeText);



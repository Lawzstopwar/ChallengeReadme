import inquirer from 'inquirer';
import fs from "fs/promises";

let {questions} = await inquirer
  .prompt([
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
        name: 'installation',
        message: "installation instructions?",
      },

      {
        type: 'input',
        name: 'usage',
        message: "The usage of the project?",
      },

      {
        type: 'input',
        name: 'license',
        message: "License is required?",
        choices:['mit', 'jumbo', 'microw'],
        filter(val){
            return val.toLowercase();
        },

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

    
      
])

let readmeText = 

#Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}


## License
${answers.license}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.email}
${answers.github}


fs.writeFile("README.md",readmeText)

console.log (questions);




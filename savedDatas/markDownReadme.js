
class MarkDown {
    static generateReadme(answers){
        return `
    # ${answers.title}

    ## Table of Content
    - [Project description](#Description)
    - [Installation](#Installation)
    - [Usage](#Usage)
    - [License](#License)
    - [Contributing](#Contributing)
    - [Tests](#Tests)
    - [Question](#Questions)
   

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



    `
}
}
module.export = MarkDown
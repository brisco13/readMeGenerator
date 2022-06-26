// required
const inquirer = require('inquirer');
const fs = require('fs');
const Arithmetic = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions
const questions = [
    "What is the title of your project?",
    "Please provide a short description of your project:",
    "Which license is this project covered under?",
    "Would you like to provide installation instructions?",
    "Please provide installation instructions:",
    "Would you like to provide usage information? ",
    "Please provide usage information:",
    "Would you like to provide contribution instructions?",
    "Please provide contribution guidelines:",
    "Would you like to provide test instructions?",
    "Please provide test instructions:",  
    "Would you like to provide your github information?",
    "Please provide your github username:",
    "Would you like to provide your email address?",
    "Please provide your email address:",
    "Please provide instructions to Contact you:"
];

// readMe guide/template provided by https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function writeToFile(fileName, data) {
  const markup = generateMarkdown(fileName,data);

    fs.writeFile(fileName, markup, (err) =>
      err ? console.log(err) : console.log(`${fileName} successfully created!`)
    );
}

// inquirer prompts
function init() {
    inquirer
        .prompt([
            //Project Name
            {
                type: 'input',
                name: 'name',
                message: questions[0]
            },
            //Project description
            {
                type: 'input',
                name: 'desc',
                message: questions[1]
            },
            //Project license
            {
                type: 'checkbox',
                name: 'license',
                message: questions[2],
                choices: [  "MIT License ", "CC BY 4.0 License ", "GNU GPL v3 License ", "Berkeley Software Distribution License ", "Apache License 2.0 ", "Internet Systems Consortium License "]
            },
            //install instructions
            {
                type: 'confirm',
                name: 'wInstall',
                message: questions[3]
            },
            {
                when: function (response) {
                    return response.wInstall;
                },
                name: 'install',
                message: questions[4]
            }, 
            //usage instructions
            {
                type: 'confirm',
                name: 'wUsage',
                message: questions[5]
            },
            {
                when: function (response) {
                    return response.wUsage;
                },
                name: 'usage',
                message: questions[6]
            }, 
            //contributors
            {
                type: 'confirm',
                name: 'wCont',
                message: questions[7]
            },
            {
                when: function (response) {
                    return response.wCont;
                },
                name: 'cont',
                message: questions[8]
            }, 
            //test instructions
            {
                type: 'confirm',
                name: 'wTest',
                message: questions[9]
            },
            {
                when: function (response) {
                    return response.wTest;
                },
                name: 'test',
                message: questions[10]
            }, 
            //github info
            {
                type: 'confirm',
                name: 'wGit',
                message: questions[11]
            },
            {
                when: function (response) {
                    return response.wGit;
                },
                name: 'git',
                message: questions[12]
            }, 
            //email
            {
                type: 'confirm',
                name: 'wEmail',
                message: questions[13]
            },
            {
                when: function (response) {
                    return response.wEmail;
                },
                type: 'input',
                name: 'email',
                message: questions[14]
            }, 
            //call me, beep me, if you wanna reach me
            {
                type: 'input',
                name: 'reach',
                message: questions[15]
            }, 
        ])
    .then((data) => {
        const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName,data)
    })
        
}

// Function call to initialize app
init();


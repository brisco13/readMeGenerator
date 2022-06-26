// required
const inquirer = require('inquirer');
const fs = require('fs');

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
let readMeText = [];

// readMe guide/template provided by https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function writeToFile(fileName, data) {
    readMeText.push(`# ${data.name} \n\n`);
    if (data.license.includes("MIT License")){
        readMeText.push(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)    `)} 
    if (data.license.includes("CC BY 4.0 License")){
        readMeText.push(`[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)    `)}
    if (data.license.includes("GNU GPL v3 License")){
        readMeText.push(`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)    `)}
    if (data.license.includes("Berkeley Software Distribution 3-Clause License")){
        readMeText.push(`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)    `)}
    if (data.license.includes("Apache License 2.0")){
        readMeText.push(`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)     `)}
    if (data.license.includes("Internet Systems Consortium License")){
        readMeText.push(`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)      `)}
    readMeText.push(`\n\n## Description\n\n${data.desc} \n\n`);
    readMeText.push(`## Table of Contents\n\n${data.wInstall? `[Installation](#installation)\n\n` : ""}${data.wUsage? `[Usage](#usage)\n\n` : ""}${data.wCont? `[Contribution](#contribution)\n\n` : ""}[License](#license)\n\n[Features](#features)\n\n[Credits](#credits)\n\n${data.wCont? `[Tests](#tests)\n\n` : ""}[Contact Me](#contact-me)\n\n`);
    readMeText.push(`${data.wInstall ? `## Installation\n\n ${data.install}\n\n` : ""}` );
    readMeText.push(`${data.wUsage ? `## Usage\n\n ${data.usage}\n\n`: ""}`);
    readMeText.push(`${data.wCont ? `## Contribution\n\n${data.cont}\n\n`: ""}`);
    readMeText.push(`## License: \n\nThis project is licensed under the ${data.license}\n\n---\n\n`);
    readMeText.push(`## Features: \n\n(list Features here - this is a great place for screenshots!)\n\n`);
    readMeText.push(`## Credits: \n\n(list Credits here)\n\n`);
    readMeText.push(`${data.wTest ? `##Tests\n\n${data.test}\n\n`: ""}`);
    readMeText.push(`## Contact Me: \n\n${data.reach}\n ${data.wGit ? `\n[My Github](https://github.com/${data.git})`: ""}${data.wEmail ? `\n[My Email](mailto:${data.email})`: ""}`);

    fs.writeFile(fileName, readMeText.join(''), (err) =>
      err ? console.log(err) : console.log('Success!')
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
                choices: [  "MIT License", "CC BY 4.0 License", "GNU GPL v3 License", "Berkeley Software Distribution License", "Apache License 2.0", "Internet Systems Consortium License"]
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
        console.log(data)
        const fileName = `${data.name.toLowerCase().split(' ').join('')}.md`;
        writeToFile(fileName,data)
    })
        
}

// Function call to initialize app
init();


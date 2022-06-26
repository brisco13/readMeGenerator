// 
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",                                //0
    "Please provide a short description of your project:",               //1
    "Which license is this project covered under?",                      //2
    "Would you like to provide installation instructions?",        //3
    "Please provide installation instructions:",                         //4
    "Would you like to provide usage information? ",                //5
    "Please provide usage information:",                                 //6
    "Would you like to provide contribution instructions?",          //7
    "Please provide contribution guidelines:",                           //8
    "Would you like to provide test instructions?",                //9
    "Please provide test instructions:",                                 //10   
    "Would you like to provide your github information?",          //11
    "Please provide your github username:",                              //12
    "Would you like to provide your email address?",               //13
    "Please provide your email address:",                                //14
    "Please provide instructions to Contact you:",                         //16
];
let readMeText = ["","","","","","","","","","","","","","","",""];

// readMe guide/template provided by https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide
function writeToFile(fileName, data) {
    readMeText[0] = `# ${data.name} \n\n`;
    readMeText[1] = `## Description\n\n${data.desc} \n\n`;
    readMeText[2] = `## Table of Contents\n\n
    ${data.wInstall? `[Installation](#install)\n` : ""} 
    ${data.wUsage? `[Usage](#us)\n` : ""} 
    ${data.wCont? `[Contribution](#cont)\n` : ""} 
    [License](#lic)\n
    [Features](#feat)\n
    [Credits](#cred)\n
    ${data.wCont? `[Tests](#test)\n` : ""} 
    [Contact Me](#contact)\n
    `;
    
    readMeText[3] = `${data.wInstall ? `<a name="install"></a>## Installation\n\n ${data.install}\n\n` : ""}` 
    
    readMeText[4] = `${data.wUsage ? `<a name="us"></a>## Usage\n\n ${data.usage}\n\n`: ""}`
    
    readMeText[6] = `${data.wCont ? `<a name="cont"></a>## Contribution\n\n${data.cont}\n\n`: ""}`

    readMeText[7] = `<a name="lic"></a>## License: \n\nThis project is licensed under the ${data.license}\n\n---\n\n`

    readMeText[8] = `<a name="feat"></a>## Features: \n\n(list Features here - this is a great place for screenshots!)\n\n`

    readMeText[9] = `<a name="cred"></a>## Credits: \n\n(list Credits here)\n\n`

    readMeText[10] = `${data.wTest ? `<a name="test"></a>##Tests\n\n${data.test}\n\n`: ""}`

    readMeText[11] = `<a name="contact"></a>## Contact Me: ${data.wGit ? `\n\n[My Github](https://github.com/${data.git})`: ""}${data.wEmail ? `\n\n[My Email](mailto:${data.email})`: ""}\n\n${data.reach}\n\n`


    fs.writeFile(fileName, readMeText.join(''), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    ask();
}

// inquirer prompts
function ask() {
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
                type: 'list',
                name: 'license',
                message: questions[2],
                choices: [  "MIT License", 
                            "CC BY 4.0 License", "GNU GPL v3 License", "Berkeley Software Distribution License", 
                            "Apache License 2.0", "Internet Systems Consortium License"]
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


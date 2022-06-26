// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",                                //0
    "Please provide a short description of your project:",               //1
    "Which license is this project covered under?",                      //2
    "Would you like to provide installation instructions?",        //3
    "Please provide installation instructions:",                         //4
    "Would you like to provide usage information? [Y/N]",                //5
    "Please provide usage information:",                                 //6
    "Would you like to provide contribution guidelines? [Y/N]",          //7
    "Please provide contribution guidelines:",                           //8
    "Would you like to provide test instructions? [Y/N]",                //9
    "Please provide test instructions:",                                 //10   
    "Would you like to provide your github information? [Y/N]",          //11
    "Please provide your github username:",                              //12
    "Would you like to provide your email address? [Y/N]",               //13
    "Please provide your email address:",                                //14
    "Would you like to provide instructions on how to reach you? [Y/N]", //15
    "Please provide instructions to reach you:",                         //16
    "Would you like to provide  [Y/N]",
    "Please provide ",
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile( )
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
                type: 'checkbox',
                name: 'desc',
                message: questions[2],
                choices: ["op1", "op2", "op3", "op4"]
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
                type: 'confirm',
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
            //contribution instructions
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
                type: 'confirm',
                name: 'wReach',
                message: questions[15]
            },
            {
                when: function (response) {
                    return response.wReach;
                },
                name: 'reach',
                message: questions[16]
            }, 
        ])
    .then((data) => {
        console.log(data)
    })
        
}

// Function call to initialize app
init();

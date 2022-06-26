// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    "What is the title of your project?",                                //0
    "Please provide a short description of your project:",               //1
    "Which license is this project covered under?",                      //2
    "Would you like to provide installation instructions? [Y/N]",        //3
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
                type: 'confirm',
                name: 'install',
                message: questions[3]
            },
            {
                when: function (response) {
                  console.log(response.install)
                    return response.install;
                },
                name: 'want_install',
                message: questions[4]
            }, 
            {
                type: 'confirm',
                name: 'test',
                message: questions[5]
            },
        ])
    .then((data) => {
        console.log(data)
    })
        
}

// Function call to initialize app
init();

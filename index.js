const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown")

inquirer
  .prompt([
    /* Pass your questions in here */
    // {
    // type: "input",
    // name: "title",
    // message: "What is your project's title?"
    // },
    // {
    // type: "input",
    // name: "description",
    // message: "Enter a project description?"
    // },
    // {
    // type: "input",
    // name: "install instructions",
    // message: "Enter installation instructions."
    // },
    // {
    // type: "input",
    // name: "usage",
    // message: "Enter usage information or usage examples."
    // },
    // {
    // type: "input",
    // name: "guidelines",
    // message: "Enter any contribution guidelines"
    // },
    // {
    // type: "input",
    // name: "test",
    // message: "Enter test instructions"
    // },
    // {
    // type: "list",
    // name: "license",
    // message: "What license would you like to use",
    // choices: [
    //     "HTML", 
    //     "CSS", 
    //     "JavaScript", 
    //     "MySQL"
    //   ]
    // },
    {
    type: "input",
    name: "name",
    message: "What is your github name?"
    },
    // {
    // type: "input",
    // name: "email",
    // message: "What is your email?"
    // },
    
  ])
  .then(answers => {
    // Check the answers
    console.log(answers)

    //creat readme file
    fs.writeFile("readme_render.md", generateMarkdown(answers) , function(err) {
      
      // Catch errors with the writeFile if there are any
      if (err) {
        console.log("fail!");
        return console.log(err);
      }
        console.log("Success!");
    });

  })
  // Catch any errors with inquirer
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Prompt couldn't be rendered in the current environment");

    } else {
      // Something else when wrong
      console.log(error)
      console.log("something else failed");
    }
  });
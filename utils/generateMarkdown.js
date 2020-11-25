// function to generate markdown for README
function generateMarkdown(data) {
    console.log('generating markdown')

    return `
    # ${data.title}

    ## Description
    ${data.description}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    ## Installation

    ## Usage

    ## Credits

    ## License
    
    
    `;
  }
  
  module.exports = generateMarkdown;
  
// function to generate markdown for README
function generateMarkdown(data) {
    console.log('generating markdown')
    console.log(data)
    let license = null;

  switch (data.license) {
    case "MIT":
      license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    break;
    case "Apache 2.0":
      license = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    break;
    case "BSD (Berkeley Software Distribution)":
      license = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    break;
    case "GPLv3 (General Public License, version 3)":
      license = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    break;
    default:
      license = "no license";
    break;
  }
    
return `
# ${data.title}
${license}

## Description
${data.description}

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#Contributing)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This repository is licensed under the ${data.license} license

## Contributing
${data.guidelines}

## Tests
${data.test}

## Questions
#### For any questions about this repository send an email to ${data.email}
#### View my full GitHub at [https://github.com/${data.name}](https://github.com/${data.name})


`;
}
  
  module.exports = generateMarkdown;
  
// function to generate markdown for README
function generateMarkdown(data) {
    console.log('generating markdown')
    console.log(data)
    
return `
# ${data.title}
## ${data.name}
## ${data.description}

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
  
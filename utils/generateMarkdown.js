// function to generate markdown for README
function generateMarkdown(data) {
    console.log('generating markdown...')

    return `
    # ${data.title}

    ## Description
    ${data.description}

  }
  
  module.exports = generateMarkdown;
  
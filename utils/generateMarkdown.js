// function to generate markdown for README
function generateMarkdown(data) {
    console.log('generating markdown...')

    return `
    # ${data.title}
    `;
}
  
  module.exports = generateMarkdown;
  
// function to generate markdown for README
function generateMarkdown(data) {
    console.log('generating markdown')
    console.log(data)
    return `# ${data.name}
    # ${data.title}`;
  }
  
  module.exports = generateMarkdown;
  
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # ${response.title}

  # Table of Contents
  -[description](#description)
  -[Installation](#Installation)
  -[Usage](#Usage)
  -[Contirbutors](#Contirbutors)
  -[Licensing](#Licensing)
  -[Tests](#Tests)
  -[Github](#Github)
  -[Email](#Email)
  
  ${responsse.username}
  ##username:
  
  ${response.description}
  ##description:
 
  ${response.Installation}
  ##Installation:

  ${response.Usage}
  ##Usage:

  ${response.Contirbutors}
  ##Contributors:

  ${response.Licensing}
  ##Licensing

  ${response.Tests}
  ##Tests:

  ${response.Github}
  ##Github:

  ${response.Email}
  ##Email:
`;
}

module.exports = generateMarkdown;

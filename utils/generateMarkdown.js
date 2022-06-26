function generateMarkdown(fileName, data) {
  let readMeText = [];

  readMeText.push(`# ${data.name} \n\n`);
  if (data.license.includes("MIT License ")){
      readMeText.push(`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)    `)} 
  if (data.license.includes("CC BY 4.0 License ")){
      readMeText.push(`[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)    `)}
  if (data.license.includes("GNU GPL v3 License ")){
      readMeText.push(`[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)    `)}
  if (data.license.includes("Berkeley Software Distribution 3-Clause License ")){
      readMeText.push(`[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)    `)}
  if (data.license.includes("Apache License 2.0 ")){
      readMeText.push(`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)     `)}
  if (data.license.includes("Internet Systems Consortium License ")){
      readMeText.push(`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)      `)}
  readMeText.push(`\n\n## Description\n\n${data.desc} \n\n`);
  readMeText.push(`## Table of Contents\n\n${data.wInstall? `[Installation](#installation)\n\n` : ""}${data.wUsage? `[Usage](#usage)\n\n` : ""}${data.wCont? `[Contribution](#contribution)\n\n` : ""}[License](#license)\n\n[Features](#features)\n\n[Credits](#credits)\n\n${data.wCont? `[Tests](#tests)\n\n` : ""}[Contact Me](#contact-me)\n\n`);
  readMeText.push(`${data.wInstall ? `## Installation\n\n ${data.install}\n\n` : ""}` );
  readMeText.push(`${data.wUsage ? `## Usage\n\n ${data.usage}\n\n`: ""}`);
  readMeText.push(`${data.wCont ? `## Contribution\n\n${data.cont}\n\n`: ""}`);
  readMeText.push(`## License: \n\nThis project is licensed under the ${data.license}\n\n---\n\n`);
  readMeText.push(`## Features: \n\n(list Features here - this is a great place for screenshots!)\n\n`);
  readMeText.push(`## Credits: \n\n(list Credits here)\n\n`);
  readMeText.push(`${data.wTest ? `## Tests\n\n${data.test}\n\n`: ""}`);
  readMeText.push(`## Contact Me: \n\n${data.reach}\n ${data.wGit ? `\n[My Github](https://github.com/${data.git})`: ""}${data.wEmail ? `\n[My Email](mailto:${data.email})`: ""}`);

  const markup = readMeText.join('');

  return markup;}

module.exports = generateMarkdown;

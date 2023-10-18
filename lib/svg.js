const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument } = require('./document');

class SVG {
  constructor() {
    this.title = '';

    // Array of task objects e.g. [{ text: string, priority: bool }, ...]
    this.tasks = [];
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Please add any text up to 3 characters',
        },
        {
          type: 'input',
          name: 'textcolor',
          message: 'Please add a TEXT color keyword OR a hexadecimal number e.g., #FFF000)',
        },
        {
          type: 'rawlist',
          name: 'shape',
          message: 'Please select a shape',
          choices: ['Circle', 'Triangle', 'Square'],
        },
        {
          type: 'input',
          name: 'color',
          message: 'Please add a SHAPE color keyword OR a hexadecimal number e.g., #FFF000',
        },
      ])
      .then((answers) => {
        return writeFile(
          join('./examples/logo.svg'),
          createDocument(answers.textcolor, answers.text, answers.color, answers.shape)
        );
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = SVG;

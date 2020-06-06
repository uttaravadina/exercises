#!/usr/bin/env node
const path = require('path');
const fs = require('fs');
const fsP = require('fs').promises;
const chalk = require('chalk');
const { ArgumentParser } = require('argparse');
const rimraf = require('rimraf');
const toCamelCase = require('lodash/camelCase');

const { red, green } = chalk;

function camelCaseToDash(str) {
  return str.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase();
}

const readmeStub = `# Instructions

*None*
`;

const implementationStub = filename => `
// You can change the \`args\`
function ${filename}(...args) {
  return args;
}

export {
  ${filename},
};
`;

const testFileStub = (question) => `import { ${question} } from './${question}';

describe('${question}', () => {
  test('should do something', () => {
    expect(true).toBe('tests for ${question} not written');
  });
});
`;

const parser = new ArgumentParser();
parser.addArgument(['-t', '--track'], { required: true });
parser.addArgument(['-q', '--question'], { required: true });


async function main() {
  const { track, question } = parser.parseArgs();
  const exercisesFolderName = `${track}-exercises`;
  const questionFolderPath = path.join(exercisesFolderName, question);

  if (fs.existsSync(questionFolderPath)) {
    console.log('The question already exists.');
    return;
  }

  const questionCamelCase = toCamelCase(question);
  const implementationFilePath = path.join(questionFolderPath, `${questionCamelCase}.js`)
  const testFilePath = path.join(questionFolderPath, `${questionCamelCase}.test.js`)
  const readmeFilePath = path.join(questionFolderPath, 'README.md');

  try {
    await fsP.mkdir(questionFolderPath);
    await fsP.writeFile(implementationFilePath, implementationStub(questionCamelCase));
    await fsP.writeFile(testFilePath, testFileStub(questionCamelCase));
    await fsP.writeFile(readmeFilePath, readmeStub);
  } catch (err) {
    await rimraf(questionFolderPath);
  }
  console.log(`Successful. Question at ${green(questionFolderPath)}`);
}

if (require.main === module) {
  main();
}
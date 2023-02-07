// Script file to allow for dotenv to be used throughout angular app
// Source: https://plainenglish.io/blog/setup-dotenv-to-access-environment-variables-in-angular-9-f06c6ffb86c0

const { writeFile } = require('fs');
const { argv } = require('yargs');

require('dotenv').config(); // read environment variables from .env file

// read the command line arguments passed with yargs
const environment = argv.environment;
const isProduction = environment === 'prod';

const targetPath = isProduction
  ? `./src/environments/environment.prod.ts`
  : `./src/environments/environment.ts`;

const environmentFileContent = `
export const environment = {
   production: ${isProduction},
   COCKTAIL_API_BASEURL: "${process.env.COCKTAIL_API_BASEURL}",
};`;

// write the content to the respective file
writeFile(targetPath, environmentFileContent, function (err: any) {
  if (err) {
    console.error('Error writing environment file', err);
  }

  console.log(`Variables written to ${targetPath}`);
});

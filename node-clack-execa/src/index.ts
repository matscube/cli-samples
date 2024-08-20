import { intro, outro } from '@clack/prompts';
import {execa} from 'execa';

async function main() {
  intro(`create-my-app`);
  
  // Do stuff
  // const branch = await execa`git branch --show-current`;
  // await execa`dep deploy --branch=${branch}`;
  

  const {stdout} = await execa`npm run build`;
// Print command's output
console.log(stdout);
  
  outro(`You're all set!`);
}

main();

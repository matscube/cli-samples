import { intro, outro } from '@clack/prompts';
import { execa } from 'execa';

async function main() {
  intro(`create-my-app`);

  /**
   * Between intro and outro, console.log is not output
   * If stdout is set to 'inherit', the stdout of execa command is displayed to the console.
   * If stdout is set to 'pipe', the stdout log of execa command can be obtained as the returned value of execa => stdout can be stored as a variable
   * If stdout is set to 'inherit' and 'pipe', the result of execa command is displayed and the stdout log for execa command is stored as a variable
   *
   * If stdin is set, you can pass the value you entered to the child process of execa command
   */
  const { stdout, stderr } = await execa({
    stdout: ['inherit', 'pipe'],
    stderr: ['inherit', 'pipe'],
    stdin: 'inherit',
  })`ssh-keygen -f ./test-key`;

  outro(`You're all set!`);

  console.log({ stdout, stderr });
}

main();

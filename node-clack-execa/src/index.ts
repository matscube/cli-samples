import { intro, outro, spinner, text } from '@clack/prompts';

async function main() {
  intro(`create-my-app`);

  const pushSpinner = spinner();
  pushSpinner.start(`Running command...`);

  /**
   * Between intro and outro, console.log is not output
   * If stdout is set to 'inherit', the stdout of execa command is displayed to the console.
   * If stdout is set to 'pipe', the stdout log of execa command can be obtained as the returned value of execa => stdout can be stored as a variable
   * If stdout is set to 'inherit' and 'pipe', the result of execa command is displayed and the stdout log for execa command is stored as a variable
   *
   * If stdin is set, you can pass the value you entered to the child process of execa command
   */
  // const { stdout, stderr } = await execa({
  //   stdout: ['inherit', 'pipe'],
  //   stderr: ['inherit', 'pipe'],
  //   stdin: 'inherit',
  // })`git push`;

  // const { stdout, stderr } = await execa({
  //   stdout: ['inherit', 'pipe'],
  //   stderr: ['inherit', 'pipe'],
  //   stdin: 'inherit',
  // })`ssh-keygen -f ./test-key`;

  pushSpinner.stop('Finished running command');

  const meaning = await text({
    message: 'What is the meaning of life?',
    placeholder: 'Not sure',
    initialValue: '42',
    validate(value) {
      if (value.length === 0) return `Value is required!`;
    },
  });

  outro(`You're all set!`);

  // console.log({ stdout, stderr });
}

main();

import { intro, outro, spinner } from '@clack/prompts';
import { execa } from 'execa';

async function main() {
  intro(`create-my-app`);

  const pushSpinner = spinner();
  pushSpinner.start(`Running command...`);
  pushSpinner.stop('Finished running command');

  const { stdout, stderr } = await execa('ssh-keygen', ['-f ./test-key']);
  // const { stdout, stderr } = await execa('git', ['push', 'origin'], {
  //   stdout: 'inherit',
  //   stderr: 'inherit',
  //   stdin: 'inherit',
  // });
  // const { stdout, stderr } = await execa('ls', ['-la']); // OK
  // const { stdout, stderr } = await execa('ls -la'); // NG

  outro(`You're all set!`);
  console.log({ stdout, stderr });
}

main();

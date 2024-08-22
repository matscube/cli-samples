import { intro, outro } from '@clack/prompts';
import { execa } from 'execa';

async function main() {
  intro(`create-my-app`);

  const { stdout, stderr } = await execa('ssh-keygen', ['-f ./test-key']);
  // const { stdout, stderr } = await execa('ls', ['-la']); // OK
  // const { stdout, stderr } = await execa('ls -la'); // NG

  outro(`You're all set!`);
  console.log({ stdout, stderr });
}

main();

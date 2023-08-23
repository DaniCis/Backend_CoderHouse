import { Command } from 'commander';

const program = new Command();

program
  .option('-d, --debug', 'Variable para debug', false)
  .option('-m, --mode <mode>', 'Ambiente de desarrollo', 'development')

program.parse()
console.log(program.opts());

export default program.opts();
import { Command } from 'commander  '

// commander instatiation
const program = new Command();

// commander config
program
  .option('-d, --debug', 'Variable para debuguear', false)
  .option('-p, --port <port>', 'Puerto del servidor', 8080)
  .option('-m, --mode <mode>', 'Ambiente de desarrollo', 'production')
  .requiredOption('-u, --user <user>', 'Usuario usando el aplicativo')
  .option('-l, --letters [letters...]', 'Specify letters')

// commander parse
program.parse();

// Access Arguments
console.log('Options => ', program.opts());
console.log('Remaining arguments => ', program.args);
const logRed = (data) => 
onsole.log('\x1b[31m%s\x1b[0m', data);
const logGreen = (data) => 
console.log('\x1b[32m%s\x1b[0m', data);

process.on('exit', (code) => {
  switch(code) {
    case 0: {
      logGreen("Proceso finalizado exitosamente");
      break;
    }
    case -4: {
      logRed("Proceso finalizado por argumentación inválida en una función");
      break;
    }
    default: {
      break;
    }
  }
});

const listNumbers = (...numbers) => {
  if (numbers.some((number) => typeof number !== "number")) {
    console.log("Invalid Parameters");
    console.log(numbers.map((number) => typeof number));
    process.exit(-4);
  } else {
    console.log(numbers);
  }
};

listNumbers(1,2,3,4);
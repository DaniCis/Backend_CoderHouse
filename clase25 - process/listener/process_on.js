process.on('exit', (code) => {
    console.log("Finalizando programa con codigo => ", code);
  });
  
  process.on('uncaughtException', (error) => {
    console.log("Ocurrio un error no esperado");
  
    console.log(error.message);
  });
  
  process.on('message', (data) => {
     console.log(data);
  });
  
  console();
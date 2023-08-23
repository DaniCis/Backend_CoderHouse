const operacionCompleja = () => {
    let result = 0;
    for(let i =0; i<5e9; i++) {
      result+=i;
    }
    return result;
    //process.send(result)
  };
  
  
  process.on('message', (data) => {
    console.log(data); // start
    const result = operacionCompleja();
    process.send(result);
  });
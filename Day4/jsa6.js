const chainable = (initialValue) => {
    let value = initialValue;
  
    const operations = {
      add: (num) => {
        value += num;
        return operations;
      },
      multiply: (num) => {
        value *= num;
        return operations;
      },
      getResult: () => value,
    };
  
    return operations;
  };
  
  const result = chainable(5).add(3).multiply(2).getResult();
  console.log(result);
  
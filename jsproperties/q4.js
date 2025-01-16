function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
  }
console.log(createMessage("Welcome", "Alice", "Bob", "Charlie"));
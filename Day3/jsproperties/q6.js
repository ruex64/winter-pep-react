function createUserProfile(username, age = 25, country = "Unknown") {
    return { username, age, country };
  }
  console.log(createUserProfile("sam"));
  console.log(createUserProfile("same", 30, "Inida")); 
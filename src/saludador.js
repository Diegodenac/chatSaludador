function saludar(name, age, genero) {
  let message = `Hola ${name}`;
  if (parseInt(age) > 30) {
    if (genero === "female") {
      message = `Hola Sra ${name}`;
    } else if (genero === "male") {
      message = `Hola Sr ${name}`;
    }
  }
  return message;
}

export default saludar;


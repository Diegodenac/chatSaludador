function saludar(name, age, genero) {
  let fechaActual = new Date();
  let message;
  if (fechaActual.getHours() >= 1){
    message = 'Buenos dias, '
    if (fechaActual.getHours() >= 12){
      message = 'Buenas tardes, '
      if (fechaActual.getHours() >= 18){
        message = 'Buenas noches, '
      }
    }
  }
  if (parseInt(age) > 30 && genero != "other") {
    if (genero == "female") {
      message = message + `Sra ${name}`;
    } else if (genero == "male") {
      message = message + `Sr ${name}`;
    }
  }
  else{
    message = message + `${name}`;
  }
  return message;
}

export default saludar;


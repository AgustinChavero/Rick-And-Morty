function validation (userData) {
  let emailRegex = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;
  let passwordRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  let errors = {}

  if (userData.username) {
    console.log("Entre a username")
    if (!emailRegex.test(userData.username)) {
      
      errors.username = "No es un mail valido"
      console.log("entre a mail error")
    } else {
      errors.username = ""
    }
  } else {
      if (!passwordRegex.test(userData.password)) {
        errors.password = "La contraseña no es valida"
        console.log("entre a pass error")
      } else {
        errors.password = ""
      }
    }

  return errors;
}

export default validation;
function validation (userData) {
  let emailRegex = /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/;
  let passwordRegex = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;

  let errors = {}

  if (userData.username) {
    if (!emailRegex.test(userData.username)) {
      errors.username = "No es un mail valido"
    } else {
      errors.username = ""
    }
  } else {
      if (!passwordRegex.test(userData.password)) {
        errors.password = "La contraseña no es valida"
      } else {
        errors.password = ""
      }
    }
  return errors;
}

export default validation;
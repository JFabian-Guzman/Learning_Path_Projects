//TODO: export all the functions

const validateEmail = (email, errors) => {
  // [a-zA-Z0-9._-] means any character from a to z, A to Z, 0 to 9, ., _ or -
  // {2,3} means the previous pattern should be repeated at least 2 times and at most 3 times
  const email_patter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
  if (email === '') {
    errors.email = 'El email es requerido';
  } else if (!email_patter.test(email)) {
    errors.email = 'El email es invalido';
  }
}

const validatePassword = (password, errors) => {
  // (?=.*\d) means at least one digit
  // (?=.*[a-z]) means at least one lowercase letter
  // (?=.*[A-Z]) means at least one uppercase letter
  // (?=.*[a-zA-Z]) means at least one letter
  // .{8,} means at least 8 characters
  const password_patter = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  if (password === '') {
    errors.password = 'La contraseña es requerida';
  } else if (!password_patter.test(password)) {
      errors.password = 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número';
  }
}

const validateName = (name, errors) => {
  if( name === '') {
    errors.name = 'El nombre es requerido';
  }
}

const validatePhone = (phone, errors) => {
  const phone_patter = /^[0-9]{8}$/;
  if (phone === '') {
    errors.phone = 'El teléfono es requerido';
  } else if (!phone_patter.test(phone)) {
    errors.phone = 'El teléfono es invalido';
  }
}

const validateConfirmPassword = (password, confirmPassword, errors) => {
  if ( confirmPassword === '') {
    errors.confirmPassword = 'La confirmación de la contraseña es requerida';
  }else if (password !== confirmPassword) {
    errors.confirmPassword = 'Las contraseñas no coinciden';
  }
}

const validateLogin = (email, password) => {
  const errors = {};
  validateEmail(email, errors);
  validatePassword(password, errors);
  return errors;
}

const validateRegister = (email, password, name, phone, confirmPassword) => {
  const errors = {};
  validateEmail(email, errors);
  validatePassword(password, errors);
  validateName(name, errors);
  validatePhone(phone, errors);
  validateConfirmPassword(password, confirmPassword, errors);
  return errors;
}

export {validateLogin, validateRegister};
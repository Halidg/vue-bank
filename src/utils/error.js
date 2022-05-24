const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'USER WITH THIS EMAIL NOT FOUND',
  INVALID_PASSWORD:'USER WITH THIS PASSWORD NOT FOUND',
  auth:'зарегистрируйтесь'  
}


export function error(code) {
   return ERROR_CODES[code] ? ERROR_CODES[code] : 'unknown error'
}
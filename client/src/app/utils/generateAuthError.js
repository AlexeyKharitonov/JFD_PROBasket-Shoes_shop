export function generateAuthError(message) {
  switch (message) {
    case "INVALID_PASSWORD":
      return "Email или пароль введены некорректно";

    case "LOGIN_EXISTS":
      return "Пользователь с таким логин уже существует";

    case "LOGIN_NOT_FOUND":
      return "Пользователь с таким логином не найден";

    default:
      return "Слишком много попыток входа. Попробуйте позднее";
  }
}

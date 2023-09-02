export function generateAuthError(message) {
  switch (message) {
    case "INVALID_PASSWORD":
      return "Емэйл или пароль введены некорректно";

    case "LOGIN_EXISTS":
      return "Пользователь с таким логином уже существует";

    case "LOGIN_NOT_FOUND":
      return "Пользователь с таким логином не найден";

    case "EMAIL_EXISTS":
      return "Пользователь с таким емэйл уже зарегистрирован";

    case "PHONE_EXISTS":
      return "Пользователь с таким номером телефона уже зарегистрирован";

    default:
      return "Слишком много попыток входа. Попробуйте позднее";
  }
}

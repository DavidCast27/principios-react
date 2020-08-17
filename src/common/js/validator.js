import messagesError from "../constants/messagesRules.json";

export const inputValidate = (input, state) => {
  const validityState = input.validity;
  let messageError = "";

  if (validityState.valueMissing) {
    messageError = messagesError.required;
  } else if (validityState.tooShort) {
    const minLength = input.minLength;
    messageError = messagesError.minLength.replace("%s", minLength);
  } else if (validityState.typeMismatch) {
    messageError = messagesError.email;
  } else if (input.name === "passwordConfirmation") {
    const password = state.password.value;
    const confirmPasword = input.value;
    if (password !== confirmPasword) {
      messageError = messagesError.passwordConfirm;
      input.setCustomValidity(messageError);
    } else {
      input.setCustomValidity("");
    }
  }
  return { messageError };
};

//TODO: implementar esta funcion en el metodo onInput del input
// como capturar los parametros de entrada, ya que son inputs diferentes
const validatePasswords = (password1, password2, input) => {
  const messageError = messagesError.passwordConfirm;
  if (password1 === password2) {
    input.setCustomValidity("");
  } else {
    input.setCustomValidity(messageError);
  }
};

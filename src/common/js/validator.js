import messagesError from "../constants/messagesRules.json";

export const inputValidate = (target) => {
  let validate = {};

  if (target.required) {
    validate = isRequired(target);
    if (!validate.isValid) {
      return validate;
    }
  }

  if (target.minLength) {
    validate = isMinLength(target);
    if (!validate.isValid) {
      return validate;
    }
  }

  if (target.type === "email") {
    validate = isEmail(target);
    if (!validate.isValid) {
      return validate;
    }
  }
};

const isRequired = (target) => {
  if (!target.value) {
    return { isValid: false, messageError: messagesError.required };
  }
  return { isValid: true };
};

const isMinLength = (target) => {
  const textlength = target.value.length;
  const minLength = target.minLength;
  if (textlength < minLength) {
    const text = messagesError.minLength.replace("%s", minLength);
    return { isValid: false, messageError: text };
  }
  return { isValid: true };
};

const isEmail = (target) => {
  const pattern = /^[^@\s]+@[^@\.\s]+(\.[^@\.\s]+)+$/;
  const text = target.value;
  if (!pattern.test(text)) {
    const text = messagesError.email;
    return { isValid: false, messageError: text };
  }
  return { isValid: true };
};

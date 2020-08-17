const basicProperties = {
  messageError: "",
  value: "",
};

export const DEFAULT_STATE_SIGN_IN = {
  email: { ...basicProperties },
  password: { ...basicProperties },
};

export const DEFAULT_STATE_SIGN_UP = {
  ...DEFAULT_STATE_SIGN_IN,
  username: { ...basicProperties },
  passwordConfirmation : { ...basicProperties },
};

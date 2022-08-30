export const enum INPUT_TYPE {
  TEXT = 'text',
  PASSWORD = 'password',
  EMAIL = 'email',
}

export type inputTypes = INPUT_TYPE.TEXT | INPUT_TYPE.PASSWORD | INPUT_TYPE.EMAIL;

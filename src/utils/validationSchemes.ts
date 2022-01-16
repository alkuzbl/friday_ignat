import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(7, 'The password must be at least 7 characters')
    .max(16),
  rememberMe: yup.boolean(),
});

export const newPasswordValidationSchema = yup.object().shape({
  password: yup.string().required(),
});

export const recoveryValidationSchema = yup.object().shape({
  email: yup.string().required(),
});

export const registrationValidationSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().required(),
});
export const createPackValidationSchema = yup.object().shape({
  name: yup.string().required().min(3).max(30),
});
export const cardInfoValidationSchema = yup.object().shape({
  question: yup.string().required().min(1).max(100),
  name: yup.string().required().min(1).max(100),
});
export const searchValidationSchema = yup.object().shape({
  name: yup.string().max(20),
});

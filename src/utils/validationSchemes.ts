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

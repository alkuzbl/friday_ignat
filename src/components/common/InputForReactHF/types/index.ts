export type InputFPropsType = {
  className?: string;
  required?: boolean;
  label?: string;
  placeholder?: string;
  name:
    | 'email'
    | 'password'
    | 'rememberMe'
    | 'confirmPassword'
    | 'name'
    | 'question'
    | 'answer';
  register?: any;
  errors?: any;
  type: 'checkbox' | 'text' | 'password' | 'email';
  style?: any;
  autoComplete?: 'on' | 'off' | 'username' | 'new-password' | 'current-password' | 'name';
};

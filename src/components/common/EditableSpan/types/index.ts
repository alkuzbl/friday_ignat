import { FormStateType } from 'view/Authentication/Login/Login';

export type EditableSpanPropsType = {
  value: string;
  onClick?: (value: string) => void;
  name: string;
  onChange: (value: FormStateType) => void;
  placeholder: string;
  iconEditButton?: boolean;
};

import {
  ChangeEvent,
  CSSProperties,
  DetailedHTMLProps,
  InputHTMLAttributes,
} from 'react';

export type InputChangeEventType = ChangeEvent<HTMLInputElement>;
export type DefaultType = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type InputPropsType = DefaultType & {
  label?: string;
  classNameElement?: string;
  style?: CSSProperties;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'radio'
    | 'checkbox'
    | 'hidden'
    | 'button'
    | 'submit';
  placeholder?: string;
  name?: string;
  onChange?: (value: InputChangeEventType) => void;
  onEnter?: () => void;
  onKeyPress?: (e: DefaultType) => void;
  value?: string;
  onBlur?: () => void;
};

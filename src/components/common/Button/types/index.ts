export type ButtonPropsType = {
  title: string;
  onClick?: () => void;
  type: 'submit' | 'button' | 'link';
  view?:
    | 'default'
    | 'transparent'
    | 'default-for-packsList'
    | 'delete-for-packsList'
    | 'delete-for-pack-name'
    | 'default-for-pack-name'
    | 'popup-close';
  path?: string;
  disabled?: boolean;
};

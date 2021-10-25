import Icon, { IconProps } from '../Icon';
import {
  Label,
  StyledIconTextPrimaryButton,
  StyledOutlineButton,
  StyledPrimaryButton,
} from './styled';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  small?: boolean;
  submit?: boolean;
  icon?: IconProps['name'];
};

export const Button = ({ small, ...props }: ButtonProps) =>
  props.children && props.icon ? (
    <StyledIconTextPrimaryButton {...props} formNoValidate>
      <Icon name={props.icon} />
      <Label>{props.children}</Label>
    </StyledIconTextPrimaryButton>
  ) : (
    <StyledPrimaryButton {...props} $small={small} formNoValidate>
      {props.icon ? <Icon name={props.icon} /> : <Label>{props.children}</Label>}
    </StyledPrimaryButton>
  );

export const OutlineButton = ({ small, ...props }: ButtonProps) => (
  <StyledOutlineButton {...props} $small={small}>
    {props.icon && <Icon name={props.icon} />}
    {props.children && <Label>{props.children}</Label>}
  </StyledOutlineButton>
);

import ArrowLeft from './images/arrow-left';
import Close from './images/close';

const ICONS = {
  'arrow-left': <ArrowLeft />,
  close: <Close />,
};

export type IconProps = {
  name: keyof typeof ICONS;
};

const Icon = ({ name }: IconProps) => (ICONS[name] ? ICONS[name] : null);

export default Icon;

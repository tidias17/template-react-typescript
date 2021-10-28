import MaterialTooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

export type TooltipProps = {
  title: string;
  children: any;
};

const Tooltip = ({ title, children }: TooltipProps) => {

  return (
    <MaterialTooltip
      TransitionComponent={Fade}
      TransitionProps={{ timeout: 600 }}
      title={title}
      arrow
    >
      {children}
    </MaterialTooltip>
  );
}

export default Tooltip;
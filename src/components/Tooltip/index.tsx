import MaterialTooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

const Tooltip = ({ title, children }:any) => {

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
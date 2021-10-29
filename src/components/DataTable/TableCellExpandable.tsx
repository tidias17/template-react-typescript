import { IconButton } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { StyledTableCell } from './styled';

export type TableCellExpandableProps = {
  isExpanded: boolean;
  onClick: any;
};

const TableCellExpandable = ({isExpanded, onClick}: TableCellExpandableProps) => {
  return (
    <StyledTableCell $width={48}>
      <IconButton aria-label={isExpanded ? 'Esconder detalhes' : 'Exibir detalhes'} size="small" onClick={onClick}>
        {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
      </IconButton>
    </StyledTableCell>
  );
}

export default TableCellExpandable;
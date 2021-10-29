import { Collapse } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import { StyledExpandableTableCell } from './styled';

export type ExpandableRowProps = {
  isExpanded: boolean;
  columnSize: number;
  children: any;
};

const ExpandableRow = ({ children, isExpanded, columnSize }: ExpandableRowProps) => {
  return (
    <TableRow>
      <StyledExpandableTableCell colSpan={columnSize}>
        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </StyledExpandableTableCell>
    </TableRow>
  );
}

export default ExpandableRow;

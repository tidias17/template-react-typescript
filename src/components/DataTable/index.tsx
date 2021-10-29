import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { formatDate } from 'utils/formatters';
import ExpandableRow from './ExpandableRow';
import {
  StyledEmptyText,
  StyledPaper,
  StyledTableCell,
  StyledTitle,
  StyledSecundaryText,
  StyledToolbar,
  StyledTitleColumTable,
  StyledWrapper,
} from './styled';
import TableCellExpandable from './TableCellExpandable';

const defaultRender = (value:any) => {
  return value;
}

const dateRender = (text:string) => {
  return formatDate(text);
}

const getCellProps = (column:any) => {
  return {
    $width: column.width,
    $whiteSpace: column.whiteSpace,
    $textAlign: column.textAlign,
  };
}


export type DataTableProps = {
  title: string;
  subtitle?: string;
  columns: any;
  rows: any;
  getRowClassName?: any;
  emptyText: string;
  size?: any;
  isLoading?: boolean;
  expandedRowRender?: any;
  isHeaderHidden?: boolean;
};

const DataTable = ({
  title,
  subtitle,
  columns,
  rows,
  getRowClassName,
  emptyText,
  size,
  isLoading,
  expandedRowRender,
  isHeaderHidden = false,
}:DataTableProps ) => {
  const [expandedRowIndex, setExpandedRowIndex] = useState<any>();
  const list = Array.isArray(rows) ? rows : [];

  const renderRows = () => {
    return list.map((row, rowIndex) => {
      const isExpanded = rowIndex === expandedRowIndex;
      const handleExpandlableClick = () => {
        setExpandedRowIndex(isExpanded ? null : rowIndex);
      }

      return (
        <React.Fragment key={rowIndex}>
          <TableRow hover className={getRowClassName?.(row)}>
            {expandedRowRender && <TableCellExpandable isExpanded={isExpanded} onClick={handleExpandlableClick} />}
            {columns.map((column:any, columnIndex:number) => {
              const render = column.type === 'date' ? dateRender : column.render || defaultRender;
              const value = render(row[column.dataIndex], row, rowIndex);

              return (
                <StyledTableCell key={columnIndex} {...getCellProps(column)}>
                  {value}
                </StyledTableCell>
              );
            })}
          </TableRow>
          {expandedRowRender && (
            <ExpandableRow isExpanded={isExpanded} columnSize={columns.length + 1}>
              {expandedRowRender(row, rowIndex)}
            </ExpandableRow>
          )}
        </React.Fragment>
      );
    });
  }

  const renderContent = () => {
    if (isLoading) {
      return <StyledEmptyText>Carregando...</StyledEmptyText>;
    }
    if (list.length === 0) {
      return <StyledEmptyText>{emptyText}</StyledEmptyText>;
    }

    return (
      <TableContainer>
        <Table size={size}>
          {!isHeaderHidden && (
            <TableHead>
              <TableRow>
                {expandedRowRender && <StyledTableCell />}
                {columns.map((column:any, columnIndex:number) => (
                  <StyledTableCell key={columnIndex} {...getCellProps(column)}>
                    <StyledTitleColumTable>{column.title}</StyledTitleColumTable>
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
          )}
          <TableBody>{renderRows()}</TableBody>
        </Table>
      </TableContainer>
    );
  }

  return (
    <StyledWrapper>
      <StyledPaper>
        {(title || subtitle) && (
          <StyledToolbar>
            <StyledTitle>{title}</StyledTitle>
            <StyledSecundaryText>{subtitle}</StyledSecundaryText>
          </StyledToolbar>
        )}
        {renderContent()}
      </StyledPaper>
    </StyledWrapper>
  );
}

export default DataTable;
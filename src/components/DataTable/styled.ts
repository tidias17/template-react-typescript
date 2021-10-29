import styled from 'styled-components';
import { Paper, TableCell } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { SecondaryText, Title } from 'components/Typography';
import { theme } from 'theme';

export const StyledWrapper = styled.div<{width?: string}>`
  width: ${({ width }) => width || '100%'};
  margin-bottom: 30px;
  && {
    border-radius: 6px;
  }
`;

export const StyledToolbar = styled(Toolbar)`
  && {
    min-height: 48px;
    background-color: ${theme.colors.grey300};
    display: flex;
    align-items: center;
    padding: 0 12px;
    border-radius: 6px 6px 0 0;
    flex-wrap: wrap;
  }
`;

export const StyledTitle = styled(Title)`
  width: 100%;
  && {
    font-size: 14px;
    color: ${theme.colors.grey700};
  }
`;

export const StyledPaper = styled(Paper)`
  width: 100%;
`;

export const StyledEmptyText = styled.div`
  padding: 0 16px 16px 16px;
`;

export const StyledTableCell = styled(TableCell)<{$width?: number; $textAlign?: string; $whiteSpace?: string}>`
  && {
    width: ${({ $width }) => $width};
    text-align: ${({ $textAlign }) => $textAlign};
    white-space: ${({ $whiteSpace }) => $whiteSpace};
    padding: 8px 12px;
  }
`;

export const StyledTitleColumTable = styled.p`
  font-weight: 400;
  color: ${theme.colors.black};
  margin: 0;
`;

export const StyledExpandableTableCell = styled(StyledTableCell)<{colSpan:number}>`
  && {
    padding-bottom: 0;
    padding-top: 0;
  }
`;

export const StyledSecundaryText = styled(SecondaryText)`
  && {
    font-size: 12px;
    top: -8px;
    position: relative;
  }
`;

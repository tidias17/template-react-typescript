import { CircularProgress } from '@material-ui/core';
import styled from 'styled-components';
import { theme } from 'theme';

function getHeight({ $type }:any) {
  switch ($type) {
    case 'inline':
      return 'auto';
    case 'fullscreen':
      return '100vh';
    default:
      return '120px';
  }
}

export const StyledWrapper = styled.div<{ $type?: any; }>`
  display: grid;
  height: ${getHeight};
  place-items: center;
  width: ${({ $type }) => ($type === 'inline' ? 'auto' : '100%')};
`;

export const StyledCircularProgress = styled(CircularProgress)`
  .MuiCircularProgress-svg {
    color: ${theme.colors.black};
  }
`;

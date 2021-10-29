import styled from 'styled-components';
import { theme } from 'theme';

import { Typography } from '@material-ui/core';

export const StyledTypography = styled(Typography)<{$italic?: string}>`
  && {
    font-style: ${({ $italic }) => ($italic ? 'italic' : 'auto')};
  }
`;

export const StyledTitle = styled(Typography)`
  && {
    font-weight: 700;
  }
`;

export const StyledSectionTitle = styled(StyledTitle)<{$spacing: string}>`
  && {
    ${({$spacing}) => $spacing && 'padding: 16px;' }
  }
`;

export const StyledComplementTitle = styled.span`
  font-size: 12px;
  font-style: italic;
`;

export const StyledBoxTitle = styled.h3`
  color: ${theme.colors.grey700};
  font-size: 16px;
  font-weight: bold;
  line-height: 1.25em;
  margin: 0 0 8px 0;
`;

export const StyledContainer = styled.div`
  padding: 15px;
`;

export const StyledAccountPageTitle = styled.h2<{$textAlign: string}>`
  font-size: 18px;
  color: ${theme.colors.grey700};
  text-align: ${({$textAlign}) => $textAlign};
`;

export const StyledSectionPage = styled.section`
  margin-bottom: 2rem;
`;

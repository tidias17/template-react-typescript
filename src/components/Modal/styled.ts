import { DialogContent, DialogOverlay } from '@reach/dialog';
import styled from 'styled-components';

import { theme } from 'theme';
import { breakpoint } from 'theme/breakpoints';

export const StyledModalOverlay = styled(DialogOverlay)<{
  $isFullScreenMobile?: boolean;
}>`
  &[data-reach-dialog-overlay] {
    z-index: 1101;
  }
  > [data-reach-dialog-content] {
    border-radius: 6px;
    height: auto;
    max-width: ${props => (props.$isFullScreenMobile ? '800px' : '504px')};
    min-width: 300px;
    padding: 24px;
    width: 70%;

    ${props =>
      props.$isFullScreenMobile &&
      breakpoint.lessThan('mobile')`
      height: 100vh;
      margin: 0;
      width: 100vw;
    }
  `}
  }
`;

export const StyledModalContent = styled(DialogContent)<{ $isFullscreen?: boolean }>`
  && {
    ${({ $isFullscreen }) => $isFullscreen && 'max-width: 100%;'}
    transition: max-width 1s;
  }
`;

export const StyledModalHeader = styled.div<{ isFullScreenMobile?: boolean }>`
  color: ${theme.colors.grey600};
  display: flex;
  font-size: ${props => (props.isFullScreenMobile ? '24px' : '18px')};
  font-style: normal;
  font-weight: bold;
  justify-content: space-between;
  line-height: ${props => (props.isFullScreenMobile ? '1.5em' : '1.2em')};
  margin-bottom: 16px;

  ${props =>
    props.isFullScreenMobile &&
    breakpoint.lessThan('mobile')`
    flex-flow: column-reverse;
  `}
`;

export const StyledModalClose = styled.button<{ isFullScreenMobile?: boolean }>`
  margin: 0;
  padding: 0;
  border: none;
  background-color: #fff;
  outline: none;

  ${props =>
    props.isFullScreenMobile &&
    breakpoint.lessThan('mobile')`
    align-self: flex-end;
    margin-bottom: 16px;`}
`;

export const StyledModalWrapButtons = styled.div`
  display: flex;
  flex-flow: row-reverse;
  margin-top: 24px;

  button {
    ${breakpoint.lessThan('mobile')`
      flex-grow: 1
    `}
  }

  button ~ button {
    margin-right: 16px;
  }
`;

export const StyledModalParagraph = styled.p`
  color: ${theme.colors.grey600};
  font-size: 16px;
  line-height: 1.25em;
  margin: 0;
`;

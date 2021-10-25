/* eslint-disable no-nested-ternary */
import styled from 'styled-components';

import { theme } from 'theme';

export const Label = styled.span`
  display: block;
`;

export const StyledPrimitiveButton = styled.button<{ $small?: boolean; icon?: string }>`
  border: none;
  display: inline-block;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  height: ${props => (props.$small ? '24px' : '48px')};
  transition: 0.2s;
  justify-content: center;
  padding: ${props => (props.$small ? '3px 7px' : props.icon ? '11px 15px' : '13px 23px')};

  &:hover {
    text-decoration: none;
  }

  ${props =>
    props.$small &&
    `
      white-space: nowrap;

      ${Label} {
        font-size: 12px;
      }
    `}

  ${props =>
    !props.$small &&
    `
      ${Label} {
        font-weight: bold;
      }
    `}
`;

export const StyledPrimaryButton = styled(StyledPrimitiveButton)`
  align-items: center;
  background-color: ${theme.colors.grey400};
  border: none;
  display: inline-flex;
  color: ${theme.colors.black};
  cursor: pointer;

  &:focus,
  &:hover {
    opacity: 0.94;
    color: ${theme.colors.black};
  }

  &:active {
    opacity: 0.82;
  }

  ${props =>
    props.disabled &&
    `
    color: ${theme.colors.grey300};
    background-color: ${theme.colors.grey400};
    pointer-events: none;
  `}
`;

export const StyledOutlineButton = styled(StyledPrimitiveButton)`
  align-items: center;
  background-color: ${props => (props.disabled ? 'transparent' : `${theme.colors.white}`)};
  border: solid 1px ${theme.colors.black};
  color: ${theme.colors.black};
  display: flex;
  justify-content: center;
  line-height: 1em;

  &:focus,
  &:hover {
    background-color: ${theme.colors.grey100};
    text-decoration: none;
  }

  &:active {
    opacity: 0.66;
  }

  > svg {
    margin-right: ${props => (props.$small ? '4px' : '8px')};
    height: ${props => (props.$small ? '16px' : '24px')};
    width: ${props => (props.$small ? '16px' : '24px')};
  }

  ${props =>
    props.disabled &&
    `
    color: ${theme.colors.grey300};
    border: solid 1px ${theme.colors.grey300};
    cursor: no-drop;
    opacity: .7;
    &:hover {
      background-color: transparent;
    }
  `}
`;

export const StyledIconTextPrimaryButton = styled(StyledPrimaryButton)`
  display: flex;
  align-items: center;
  padding: 0 16px;
  > svg {
    margin-right: 8px;
    height: ${props => (props.$small ? '16px' : '24px')};
    width: ${props => (props.$small ? '16px' : '24px')};
    fill: ${theme.colors.black};
    path {
      fill: ${theme.colors.black};
    }
  }
`;

import { Typography } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyledAccountPageTitle,
  StyledBoxTitle,
  StyledComplementTitle,
  StyledContainer,
  StyledSectionPage,
  StyledSectionTitle,
  StyledTitle,
  StyledTypography,
} from './styled';

export const Title = (children:any) => {
  return <StyledTitle />;
}

export const SecondaryText = ( children:any, italic?: string ) => {
  return <StyledTypography $italic={italic} />;
}

export const SectionTitle = ({ children, complementTitle, spacing }:any) => {
  return (
    <StyledSectionTitle $spacing={spacing}>
      {children}
      {complementTitle && <StyledComplementTitle>{complementTitle}</StyledComplementTitle>}
    </StyledSectionTitle>
  );
};
SectionTitle.propTypes = {
  children: PropTypes.any.isRequired,
  spacing: PropTypes.string,
};

export const BoxTitle = (children:any) => <StyledBoxTitle>{children}</StyledBoxTitle>;
BoxTitle.propTypes = {
  children: PropTypes.any.isRequired,
};

export const Container = ( children: any ) => <StyledContainer>{children}</StyledContainer>;
Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export const AccountPageTitle = ({ children, textAlign = 'center' }:any) => (
  <StyledAccountPageTitle $textAlign={textAlign}>{children}</StyledAccountPageTitle>
);
AccountPageTitle.propTypes = {
  children: PropTypes.any.isRequired,
  textAlign: PropTypes.string,
};

export const SectionPage = (children:any) => <StyledSectionPage>{children}</StyledSectionPage>;
SectionPage.propTypes = {
  children: PropTypes.any.isRequired,
};

export { Typography };

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

export const Title = ({children}:any) => {
  return (
    <StyledTitle>
      {children}
    </StyledTitle>
  )
}

export const SecondaryText = ( {children, italic}:any ) => {
  return (
    <StyledTypography $italic={italic}>
      {children}
    </StyledTypography>
  )
}

export const SectionTitle = ({ children, complementTitle, spacing }:any) => {
  return (
    <StyledSectionTitle $spacing={spacing}>
      {children}
      {complementTitle && <StyledComplementTitle>{complementTitle}</StyledComplementTitle>}
    </StyledSectionTitle>
  );
};

export const BoxTitle = (children:any) => <StyledBoxTitle>{children}</StyledBoxTitle>;

export const Container = ( children: any ) => <StyledContainer>{children}</StyledContainer>;

export const AccountPageTitle = ({ children, textAlign = 'center' }:any) => (
  <StyledAccountPageTitle $textAlign={textAlign}>{children}</StyledAccountPageTitle>
);

export const SectionPage = (children:any) => <StyledSectionPage>{children}</StyledSectionPage>;

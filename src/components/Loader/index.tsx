import React from 'react';
import { StyledCircularProgress, StyledWrapper } from './styled';

type StyledWrapperProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>;

type LoaderProps = StyledWrapperProps & {
  type?: 'fullscreen' | 'inline';
};

export const Loader = ({ type, ...props }: LoaderProps) => {
  return (
    <StyledWrapper data-testid="loading" $type={type} {...props}>
      <StyledCircularProgress />
    </StyledWrapper>
  );
};

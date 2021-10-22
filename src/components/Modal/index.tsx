import '@reach/dialog/styles.css';

import { ReactNode } from 'react';

import Icon from '../Icon';

import {
  StyledModalClose,
  StyledModalContent,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalWrapButtons,
} from './styled';

type ModalProps = {
  actionButton?: ReactNode;
  handleClose?(): void;
  isFullScreenMobile?: boolean;
  isFullscreen?: boolean;
  secondaryButton?: ReactNode;
  showModal?: boolean;
  title?: string;
  closeButton?: boolean;
  children?: ReactNode;
  className?: string;
};

const Modal = ({
  showModal = false,
  children,
  title,
  handleClose,
  actionButton,
  isFullScreenMobile = false,
  secondaryButton,
  isFullscreen,
  closeButton = true,
  className,
  ...props
}: ModalProps) => (
  <StyledModalOverlay
    className={className}
    $isFullScreenMobile={isFullScreenMobile}
    isOpen={showModal}
    onDismiss={handleClose}
  >
    <StyledModalContent $isFullscreen={isFullscreen} aria-label={title}>
      <StyledModalHeader isFullScreenMobile={isFullScreenMobile}>
        {title}
        {closeButton && (
          <StyledModalClose isFullScreenMobile={isFullScreenMobile} onClick={handleClose}>
            <Icon name="close" />
          </StyledModalClose>
        )}
      </StyledModalHeader>
      {children}
      {actionButton && (
        <StyledModalWrapButtons>
          {actionButton}
          {secondaryButton}
        </StyledModalWrapButtons>
      )}
    </StyledModalContent>
  </StyledModalOverlay>
);

export default Modal;

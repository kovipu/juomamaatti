import React from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import Close from 'react-feather/dist/icons/x';

import Slider from './SliderContainer';

const ConfirmationPopover = ({ drink, onConfirm, onHide }) => {
  return (
    <ModalWrapper>

      <TitleBarWrapper>
        <CloseButtonWrapper onClick={onHide}>
          <Close size={28}/>
        </CloseButtonWrapper>
      </TitleBarWrapper>

      <ModalTextWrapper>
        Tilataanko <strong>{drink.name}</strong>?
      </ModalTextWrapper>


      <Slider onConfirm={onConfirm}/>
    </ModalWrapper>
  )
};

ConfirmationPopover.propTypes = {
  drink: PropTypes.object,
  onConfirm: PropTypes.func,
  onHide: PropTypes.func
};

const slideIn = keyframes`
  from {left: -100vh; opacity: 0.5}
  to {left: 0; opacity: 1}
`;

const ModalWrapper = styled.div`
  position: fixed;
  bottom: 0;
  z-index: 999;
  background-color: white;
  width: 100vw;
  height: calc(100vh - 55px);
  
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  animation: ${slideIn} 400ms 0s both;
`;

const TitleBarWrapper = styled.div`
  font-size: 1.5em;
  padding: 6px;
  width: 90vw;
  display: flex;
  justify-content: flex-end;
`;

const CloseButtonWrapper = styled.span`
  font-size: 1.5em;
  &:hover {
    cursor: pointer;
  }
`;

const ModalTextWrapper = styled.span`
  font-size: 1.5em;
  text-align: center;
`;


export default ConfirmationPopover;

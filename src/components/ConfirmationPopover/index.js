import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled, {keyframes} from 'styled-components';
import Close from 'react-feather/dist/icons/x';

import Slider from './SliderContainer';

class ConfirmationPopover extends Component {
  state = {
    swipePos: 0
  };

  render() {
    const handleConfirm = () => {
      // TODO: Laita toimimaan
      console.log('Juoma tilattu!');
      this.props.onHide();
    };

    return (
      <ModalWrapper>

        <TitleBarWrapper>
          <CloseButtonWrapper onClick={this.props.onHide}>
            <Close size={28}/>
          </CloseButtonWrapper>
        </TitleBarWrapper>

        <ModalTextWrapper>
          Tilataanko <strong>{this.props.drink.name}</strong>?
        </ModalTextWrapper>

        <Slider onConfirm={handleConfirm}/>
      </ModalWrapper>
    )
  }
}

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

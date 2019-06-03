import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Slider from './Slider';

const SliderContainer = ({ onConfirm }) => {
  const [state, setState] = useState({
    sliderStartPos: 0,
    sliderCurrentPos: 0
  });
  const { sliderStartPos, sliderCurrentPos } = state;

  const handleTouchStart = (ev) => setState({
    sliderStartPos: ev.touches[0].clientX,
    sliderCurrentPos: ev.touches[0].clientX
  });

  const handleTouchMove = (ev) => setState({
    ...state,
    sliderCurrentPos: ev.touches[0].clientX
  });

  const handleTouchEnd = () =>
    sliderCurrentPos - sliderStartPos >= 220
      ? onConfirm()
      : setState({
        sliderStartPos: 0,
        sliderCurrentPos: 0
      });

  return (
    <SliderOutlineWrapper>
      <Slider
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        startPos={sliderStartPos}
        currentPos={sliderCurrentPos}
      />
    </SliderOutlineWrapper>
  )
};

SliderContainer.propTypes = {
  onConfirm: PropTypes.func
};

const SliderOutlineWrapper = styled.div`
  width: 300px;
  height: 80px;
  border: 3px solid #ffbd98;
  background-color: #ffbd98;
  border-radius: 43px;
  margin-bottom: 5vh;
`;

export default SliderContainer;

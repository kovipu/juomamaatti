import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ChevronRight from 'react-feather/dist/icons/chevron-right';

const Slider = ({ onTouchStart, onTouchMove, onTouchEnd, startPos, currentPos }) => (
  <SliderWrapper
    onTouchStart={onTouchStart}
    onTouchMove={onTouchMove}
    onTouchEnd={onTouchEnd}
    startPos={startPos}
    currentPos={currentPos}
  >
    <ChevronRight size={28}/>
  </SliderWrapper>
);

Slider.propTypes = {
  onTouchStart: PropTypes.func,
  onTouchMove: PropTypes.func,
  onTouchEnd: PropTypes.func,
  startPos: PropTypes.number,
  currentPos: PropTypes.number
};

const calculatePosition = (props) => {
  const pos = props.currentPos - props.startPos;

  // clamp between 0 and 220px
  if (pos <= 0)
    return 0;
  else if (pos >= 220)
    return '220px';
  else
    return `${pos}px`;
};

const SliderWrapper = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate3d(${props => calculatePosition(props)},0,0);
  transition: margin 80ms;
`;

export default Slider;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Slider from './Slider';

class SliderContainer extends Component {
  state = {
    sliderStartPos: 0,
    sliderCurrentPos: 0
  };

  render() {
    const handleTouchStart = (ev) => this.setState({
      sliderStartPos: ev.touches[0].clientX,
      sliderCurrentPos: ev.touches[0].clientX
    });

    const handleTouchMove = (ev) => this.setState({
      sliderCurrentPos: ev.touches[0].clientX
    });

    const handleTouchEnd = () => this.state.sliderCurrentPos - this.state.sliderStartPos >= 220
      ? this.props.onConfirm()
      : this.setState({
        sliderStartPos: 0,
        sliderCurrentPos: 0
      });

    return (
      <SliderOutlineWrapper>
        <Slider
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          startPos={this.state.sliderStartPos}
          currentPos={this.state.sliderCurrentPos}
        />
      </SliderOutlineWrapper>
    )
  }
}

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

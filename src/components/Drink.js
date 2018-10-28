import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Drink = ({ drink, onClick }) => (
  <DrinkWrapper onClick={onClick}>
    <img
      src={`icon/${drink.icon}.svg`}
      alt="drink icon"
      height={26}
      width={26}
    />
    <DrinkNameWrapper>
      {capitalize(drink.name)}
    </DrinkNameWrapper>
  </DrinkWrapper>
);

Drink.propTypes = {
  drink: PropTypes.shape({
    name: PropTypes.string,
    icon: PropTypes.string
  }),
  onClick: PropTypes.func
};

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const DrinkWrapper = styled.div`
  width: 90vw;
  max-width: 400px;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px;
  margin: 15px 5px;
  border-radius: 5px;
  box-shadow: 0 5px 0 0 #555;
`;

const DrinkNameWrapper = styled.span`
  font-size: 1.5em;
  margin-left: 20px;
`;

export default Drink;

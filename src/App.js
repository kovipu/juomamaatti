import React, { useReducer, useEffect } from 'react';
import styled, { injectGlobal } from 'styled-components';

import { initialState, reducer } from './Store';
import Drink from './components/Drink';
import ConfirmationPopover from './components/ConfirmationPopover';

const callApi = async () => {
  const response = await fetch('/api/drinks');
  const body = await response.json();

  if (response.status !== 200) throw Error(body.message);

  return body;
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { drinks, selected } = state;

  const dialog = selected && (
      <ConfirmationPopover
        drink={selected}
        onHide={() => dispatch({ type: 'close-dialog' })}
      />
    );

  // load drinks from api
  useEffect(() => {
    callApi()
      .then(({ drinks }) => dispatch({ type: 'api-response', drinks }))
      .catch(err => console.error(err))
    }, []);

  return (
    <AppWrapper>
      <HeaderWrapper>Digit 20v</HeaderWrapper>
      <DrinksWrapper>
        {
          drinks.length > 0
            ? drinks.map(drink => (
              <Drink
                key={drink.name}
                drink={drink}
                onClick={() => dispatch({ type: 'select', drink })}
              />
            ))
            : <p>Ladataan juomia...</p>
        }
      </DrinksWrapper>
      {dialog}
    </AppWrapper>
  );
};

injectGlobal`
  body {
    background-color: salmon;
    font-family: 'Open Sans', sans-serif;
  }
`;

const HeaderWrapper = styled.div`
  padding: 10px;
  font-size: 5em;
  font-family: 'Lobster', serif;
  text-align: center;
`;

const DrinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export default App;

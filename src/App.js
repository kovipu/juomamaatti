import React, {Component} from 'react';
import styled, {injectGlobal} from 'styled-components';

import Drink from './components/Drink';
import ConfirmationPopover from "./components/ConfirmationPopover";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      drinks: [],
      dialog: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.callApi()
      .then(({ drinks }) => this.setState({ drinks }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/drinks');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  handleClick(drink) {
    const onHide = () => this.setState({ dialog: null });
    const dialog = (
      <ConfirmationPopover
        drink={drink}
        onHide={onHide}
      />
    );
    this.setState({ dialog });
  }

  render() {
    return (
      <AppWrapper>
        <HeaderWrapper>Digit 20v</HeaderWrapper>
        <DrinksWrapper>
          {
            this.state.drinks.length > 0
              ? this.state.drinks.map(drink => (
                <Drink
                  key={drink.name}
                  drink={drink}
                  onClick={() => this.handleClick(drink)}
                />
              ))
              : <p>Ladataan juomia...</p>
          }
        </DrinksWrapper>
        {this.state.dialog}
      </AppWrapper>
    );
  }
}

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

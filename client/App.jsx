import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Main from './components/Main';
import Signin from './components/Signin';

const Container = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  text-align: center;
  font-size: 2em;
  color: #313b72;
`;

const App = () => {
  const [login, setLogin] = useState(true);

  return (
    <Router>
      <Container>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() => (login ? <Main /> : <Signin setLogin={setLogin} />)}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import Nav from './components/Nav';
import Main from './components/Main';

const Container = styled.div`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const App = () => {
  const [login, setLogin] = useState(false);

  const responseGoogle = response => {
    console.log('after login', response);
    setLogin(true);
  };

  return (
    <Router>
      <Container>
        <Nav />
        <Switch>
          <Route
            exact
            path="/"
            render={() =>
              login ? (
                <Main />
              ) : (
                <GoogleLogin
                  clientId={process.env.GOOGLE_CLIENT_ID}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                />
              )
            }
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;

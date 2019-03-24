import React from 'react';
import { GoogleLogin } from 'react-google-login';

const Signin = ({ setLogin }) => {
  const responseGoogle = response => {
    console.log('after login', response);
    setLogin(true);
  };
  return (
    <>
      <GoogleLogin
        clientId={process.env.GOOGLE_CLIENT_ID}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />
    </>
  );
};

export default Signin;

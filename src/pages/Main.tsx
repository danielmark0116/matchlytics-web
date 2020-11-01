import React from "react";
import StyledForm from "../components/AuthForm/AuthForm.styled";
import Logo from "../components/Logo/Logo";
import config from "../config";

const Main: React.FC = () => {
  return (
    <>
      <StyledForm>
        <form>
          <Logo />
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button disabled>Sign In</button>
          <br />
          <a href={config.googleOAuth} rel="no-opener no-refferer">
            <button type="button">Login with Google</button>
          </a>
        </form>
      </StyledForm>
    </>
  );
};

export default Main;

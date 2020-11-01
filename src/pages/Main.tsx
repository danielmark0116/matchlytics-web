import React from "react";
import StyledForm from "../components/AuthForm/AuthForm.styled";
import config from "../config";

const Main: React.FC = () => {
  return (
    <>
      <StyledForm>
        <form>
          <h1 className="text-xl font-bold mb-8 text-blue-900">
            ⚽ Matchlytics ⚽️
          </h1>
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

export default Main

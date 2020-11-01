import React from "react";
import StyledForm from "../components/AuthForm/AuthForm.styled";

const Main = () => {
  return (
    <>
      <StyledForm>
        <h1>Main</h1>
        <form>
          <input type="text" placeholder="Full name" />
          <input type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
          <button>Sign In</button>
        </form>
      </StyledForm>
    </>
  );
};

export default Main;

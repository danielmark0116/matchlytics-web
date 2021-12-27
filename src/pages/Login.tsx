/** @format */

import React from 'react'
import {Redirect} from 'react-router-dom'
import StyledForm from '../components/AuthForm/AuthForm.styled'
import Logo from '../components/Logo/Logo'
import config from '../config'
import {useAuthContext} from '../hooks/useAuth'

const Login: React.FC = () => {
  const {user} = useAuthContext()

  return (
    <>
      {user ? <Redirect to="/" /> : null}
      <StyledForm>
        <form>
          <Logo />
          <input disabled type="text" placeholder="Full name" />
          <input disabled type="text" placeholder="Email" />
          <input disabled type="text" placeholder="Password" />
          <button disabled>Sign In</button>
          <br />
          <a href={config.googleOAuth} rel="no-opener no-refferer">
            <button type="button">Login with Google</button>
          </a>
        </form>
      </StyledForm>
    </>
  )
}

export default Login

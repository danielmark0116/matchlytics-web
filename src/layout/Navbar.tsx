/** @format */

import Hamburger from 'hamburger-react'
import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {Button} from '../components/Button/Button.styled'
import Logo from '../components/Logo/Logo'
import {useAuthContext} from '../hooks/useAuth'
import {Menu} from './Menu.styled'

const Navbar: React.FC = () => {
  const {user, logout} = useAuthContext()
  const [menu, setMenu] = useState(false)

  const closeMenu = () => setMenu(false)

  return (
    <nav>
      {user ? <Hamburger size={28} toggled={menu} toggle={setMenu} onToggle={() => null} /> : null}
      <Menu toggled={menu}>
        <Hamburger size={28} toggled={menu} toggle={setMenu} onToggle={() => null} />
        <ul>
          <li>
            <NavLink onClick={closeMenu} to="/">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/favourites">
              Ulubione
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/bot">
              Steruj botem
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeMenu} to="/users">
              Uzytkownicy
            </NavLink>
          </li>
        </ul>
      </Menu>
      <Logo small />
      <NavLink to="/login">
        <Button
          onClick={() => {
            if (user) {
              logout()
            }
          }}>
          {user ? 'Wyloguj' : 'Zaloguj'}
        </Button>
      </NavLink>
    </nav>
  )
}

export default Navbar

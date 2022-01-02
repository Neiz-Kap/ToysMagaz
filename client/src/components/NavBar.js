import React, { useContext } from 'react';
import { Context } from "../index";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useHistory } from 'react-router-dom'

import logo from "../assets/new_logo.png"
import login from "../assets/login_ico.png"

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const history = useHistory()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
  }

  console.log(`user: ${JSON.stringify(user.user.role, null, 2)}`)

  return (
    <Navbar
      bg="dark" variant="dark"
      className="mb-3"
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src={logo}
            className="mr-2"
            alt="Logo"
          />

          {/* <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>ScubaShop</NavLink> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <NavLink className="mr-2" to={SHOP_ROUTE}>Каталог</NavLink>
            <NavLink className="mr-2" to={BASKET_ROUTE}>Корзина</NavLink> */}

          </Nav>
        </Navbar.Collapse>
        {user.isAuth ?
          <Nav className="ml-auto" style={{ color: 'white' }}>
            {user.user.role === 'ADMIN' &&
              <Button
                onClick={() => history.push(ADMIN_ROUTE)}
                variant={"outline-light"}
              >
                Админпанель
              </Button>
            }
            <Button
              variant={"outline-light"}
              onClick={() => logOut()}
              className="ml-2"
            >
              Выйти
            </Button>
          </Nav>
          :
          <Nav className="ml-auto" style={{ color: 'white' }}>
            <NavLink to={LOGIN_ROUTE} className="d-flex justify-content-between">
              <img className="mr-2" src={login} alt="auth" />
              <span>Войти на сайт</span>
            </NavLink>
          </Nav>

        }
      </Container>
      <hr />
    </Navbar>

  );
});

export default NavBar;

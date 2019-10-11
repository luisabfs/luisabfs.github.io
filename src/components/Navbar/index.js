/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { NavLink } from 'react-router-dom';

import { Container, NavMenu } from './styles';

import background from '../../assets/images/home_background.png';

const style = { borderBottom: '4px solid #88c6dd' };

const Navbar = () => (
  <Container bg={background}>
    <NavMenu>
      <li>
        <NavLink exact to="/">luisa.<span>dev</span></NavLink>
      </li>
      <li>
        <NavLink exact to="/" activeStyle={style}>home</NavLink>
      </li>
      <li>
        <NavLink to="/sobre" activeStyle={style}>sobre mim</NavLink>
      </li>
      <li>
        <NavLink to="/projetos" activeStyle={style}>projetos</NavLink>
      </li>
      <li>
        <NavLink to="/blog" activeStyle={style}>blog</NavLink>
      </li>
      <li>
        <NavLink to="">currículo</NavLink>
      </li>
      <li>
        <NavLink to="">português</NavLink>
      </li>
    </NavMenu>
  </Container>
);

export default Navbar;

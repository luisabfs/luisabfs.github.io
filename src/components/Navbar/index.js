/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { NavLink } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';

import { FiMenu } from 'react-icons/fi';

import { Container, Wrapper, NavMenu } from './styles';

import background from '../../assets/images/home_background.png';
import resume from '../../assets/curriculo_luisabfs.pdf';

const style = { borderBottom: '4px solid #88c6dd' };

const Navbar = () => (
  <Container bg={background}>
    <Wrapper>
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
        {/* <li>
          <NavLink to="/blog" activeStyle={style}>blog</NavLink>
        </li> */}
        <li>
          <NavLink to={resume} target="_blank">currículo</NavLink>
        </li>
        <li>
          <HashLink to="/#contact">contato</HashLink>
        </li>
        <li>
          <FiMenu />
        </li>
      </NavMenu>
    </Wrapper>
  </Container>
);

export default Navbar;

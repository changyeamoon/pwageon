import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropContent = styled.div`
  display: none;
  position: relative;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
`;

const DropDown = styled.div`
  position: fixed;
  bottom: 33%;
  right: 1em;
  &:hover {
    background-color: blue;
  }
  &:hover ${DropContent} {
    display: block;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  padding: 20px;
`;

const Nav = () => (
  <DropDown>
    <span>MENU</span>
    <DropContent>
      <StyledLink to="/">home</StyledLink>
      <StyledLink to="/account">about</StyledLink>
      <StyledLink to="/pigeons">docs</StyledLink>
    </DropContent>
  </DropDown>
);

export default Nav;

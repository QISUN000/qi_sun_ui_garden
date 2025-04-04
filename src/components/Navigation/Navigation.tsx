import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: #3b82f6;
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

interface NavLinkProps {
  active: boolean;
}

const NavLink = styled.li<NavLinkProps>`
  a {
    color: ${(props) => (props.active ? '#3B82F6' : '#4B5563')};
    text-decoration: none;
    font-weight: ${(props) => (props.active ? '600' : '400')};
    transition: all 0.2s;
    padding: 0.5rem 0;
    border-bottom: 2px solid ${(props) => (props.active ? '#3B82F6' : 'transparent')};

    &:hover {
      color: #3b82f6;
    }
  }
`;

export const Navigation = () => {
  const location = useLocation();

  return (
    <Nav>
      <NavContainer>
        <Logo>Qi Sun</Logo>
        <NavLinks>
          <NavLink active={location.pathname === '/'}>
            <Link to="/">Home</Link>
          </NavLink>
          <NavLink active={location.pathname === '/work'}>
            <Link to="/work">Work</Link>
          </NavLink>
          <NavLink active={location.pathname === '/skills'}>
            <Link to="/skills">Skills</Link>
          </NavLink>
          <NavLink active={location.pathname === '/resources'}>
            <Link to="/resources">Resources</Link>
          </NavLink>
          <NavLink active={location.pathname === '/dev-setup'}>
            <Link to="/dev-setup">Dev Setup</Link>
          </NavLink>
        </NavLinks>
      </NavContainer>
    </Nav>
  );
};

export default Navigation;

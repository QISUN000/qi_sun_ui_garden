import React from 'react';
import { Navigation } from '../Navigation';
import { Text } from '../Text';
import styled from 'styled-components';

const Footer = styled.footer`
  background-color: #f8f9fa;
  text-align: center;
  padding: 2rem;
  margin-top: 2rem;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout">
      <Navigation />
      <main>{children}</main>
      <Footer>
        <Text variant="body">© 2025 Qi Sun. All rights reserved.</Text>
      </Footer>
    </div>
  );
};

export default Layout;

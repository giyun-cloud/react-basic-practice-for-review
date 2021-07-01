import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const SHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 48px;
  box-shadow: 0 0 3px 3px #222;
`;
const List = styled.ul`
  display: flex;
`;
const SLink = styled(Link)`
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  font-weight: ${(prop) => (prop.pathname === prop.to ? "bold" : "null")};
  border-bottom: 4px solid
    ${(prop) => (prop.pathname === prop.to ? "Azure" : "transparent")};
  &:hover {
    font-weight: bold;
  }
`;

function Header({ location: { pathname } }) {
  return (
    <SHeader>
      <List>
        <li>
          <SLink pathname={pathname} to="/">
            Home
          </SLink>
        </li>
        <li>
          <SLink pathname={pathname} to="/tv">
            TV
          </SLink>
        </li>
        <li>
          <SLink pathname={pathname} to="/search">
            Search
          </SLink>
        </li>
      </List>
    </SHeader>
  );
}

export default withRouter(Header);

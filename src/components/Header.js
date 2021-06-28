import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import React from "react";

const SHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;
const LinkList = styled.ul`
  display: flex;
`;
const SLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-bottom: 4px solid
    ${(prop) => (prop.current === prop.to ? "#fcc419" : "transparent")};
  color: whitesmoke;
  transition: border-bottom 0.4s ease-out;
`;

function Header({ location: { pathname } }) {
  return (
    <SHeader>
      <LinkList>
        <li>
          <SLink current={pathname} to="/">
            Home
          </SLink>
        </li>
        <li>
          <SLink current={pathname} to="/tv">
            TV
          </SLink>
        </li>
        <li>
          <SLink current={pathname} to="/search">
            Search
          </SLink>
        </li>
      </LinkList>
    </SHeader>
  );
}

export default withRouter(Header);

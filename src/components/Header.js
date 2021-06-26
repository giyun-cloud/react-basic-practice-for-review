import { Link, withRouter } from "react-router-dom";
import React from "react";
import styled from "styled-components";

const SHeader = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 46px;
  background-color: #212529;
  box-shadow: 0 1px 3px 2px #000;
`;
const SUl = styled.ul`
  display: flex;
`;
const SLink = styled(Link)`
  display: flex;
  width: 60px;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  border-bottom: 5px solid
    ${(prop) => (prop.current === prop.to ? "#868e96" : "transparent")};
  transition: border-bottom 0.4s ease-in-out;
  &:hover {
    color: #fff;
  }
`;

function Header({ location: { pathname } }) {
  return (
    <SHeader>
      <SUl>
        <li>
          <SLink current={pathname} to="/">
            Home
          </SLink>
        </li>
        <li>
          <SLink current={pathname} to="/tv">
            Tv
          </SLink>
        </li>
        <li>
          <SLink current={pathname} to="/search">
            Search
          </SLink>
        </li>
      </SUl>
    </SHeader>
  );
}

export default withRouter(Header);

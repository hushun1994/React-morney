import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import icon from "icons/money.svg";

const NavWrapper = styled.nav`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > ul {
    display: flex;
    > li {
      width: 33.3333333%;
      text-align: center;
      padding: 16px;
      > img {
        max-width: 32px;
        max-height: 32px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <img src={icon} alt="" />
          <Link to="/money">记账页</Link>
        </li>
        <li>
          <Link to="/tags">标签页</Link>
        </li>
        <li>
          <Link to="/statistics">统计页</Link>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;

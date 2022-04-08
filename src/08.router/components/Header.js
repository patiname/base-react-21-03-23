import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 80px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background-color: white;
`;

const Logo = styled.div`
  font-size: 26px;
  font-weight: 700;
`;

const MenuWrap = styled.ul`
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.li`
  margin-left: 50px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={"/"}>LOGO</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="/sub01">SUB01</Link>
        </Menu>
        <Menu>
          <Link to="/sub02">SUB02</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};

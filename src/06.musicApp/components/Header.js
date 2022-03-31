import styled from "styled-components";

const SHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Menus = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:nth-child(1) {
    background-color: #fff;
    color: #1d1d1d;
  }
  &:nth-child(2) {
    border: 1px solid #808080;
    color: #fff;
  }
`;

export const Header = () => {
  return (
    <SHeader>
      <Menus>
        <i className="fa-solid fa-chevron-down"></i>
      </Menus>
      <Menus>
        <i className="fa-solid fa-bars"></i>
      </Menus>
    </SHeader>
  );
};

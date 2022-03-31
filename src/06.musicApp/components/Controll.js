import styled from "styled-components";

const ControllWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  &:nth-child(3) {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: salmon;
  }
`;

export const Controll = () => {
  return (
    <ControllWrap>
      <Item>
        <i className="fa-solid fa-shuffle"></i>
      </Item>
      <Item>
        <i className="fa-solid fa-backward"></i>
      </Item>
      <Item>
        <i className="fa-solid fa-pause"></i>
      </Item>
      <Item>
        <i className="fa-solid fa-forward"></i>
      </Item>
      <Item>
        <i className="fa-solid fa-repeat"></i>
      </Item>
    </ControllWrap>
  );
};

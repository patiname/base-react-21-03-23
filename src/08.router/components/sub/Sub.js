import styled from "styled-components";
import { Header } from "../Header";

const Container = styled.div`
  padding: 200px 300px;
  display: flex;
  justify-content: space-between;
`;

const Items = styled.div`
  width: 48%;
  &:nth-child(1) {
    background-color: gray;
    height: 600px;
  }
`;

const Title = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const Desc = styled.div`
  margin-top: 30px;
`;

export const Sub = ({ title, desc }) => {
  return (
    <div>
      <Header />
      <Container>
        <Items></Items>
        <Items>
          <Title>{title}</Title>
          <Desc>{desc}</Desc>
        </Items>
      </Container>
    </div>
  );
};

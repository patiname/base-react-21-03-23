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

export const Sub02 = () => {
  return (
    <div>
      <Header />
      <Container>
        <Items></Items>
        <Items>
          <Title>Sub 02</Title>
          <Desc>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing
          </Desc>
        </Items>
      </Container>
    </div>
  );
};

import { Link } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";

const Wrap = styled.div``;

const MainBanner = styled.div`
  height: 800px;
  background-color: gray;
`;

const Section = styled.div`
  padding: 100px 200px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Con = styled.div`
  width: 30%;
  height: 400px;
  background-color: gray;
  a {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Home = () => {
  return (
    <Wrap>
      <Header />

      <MainBanner></MainBanner>

      <Section>
        <Con>
          <Link to="/sub01"></Link>
        </Con>
        <Con>
          <Link to="/sub02"></Link>
        </Con>
      </Section>
    </Wrap>
  );
};

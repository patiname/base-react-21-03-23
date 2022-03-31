import styled from "styled-components";
import { musicDB } from "../db";
import { border } from "../styles/GlobalStyled";
import { Bar } from "./components/Bar";
import { BottomPlay } from "./components/BottomPlay";
import { Controll } from "./components/Controll";
import { Header } from "./components/Header";
import { Title } from "./components/Title";

const Wrap = styled.div`
  height: 100vh;
  background-color: #555;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.section`
  width: 375px;
  height: 812px;
  background-color: #1d1d1d;
  border-radius: ${border.raidus};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  padding: 30px;
  box-sizing: border-box;
`;

const CoverImg = styled.div`
  width: 100%;
  height: 300px;
  margin: 50px 0;
  border-radius: ${border.raidus};
  box-shadow: 0 0 15px 10px rgba(0, 0, 0, 0.9);
`;

export const MusicApp = () => {
  return (
    <Wrap>
      <Container>
        <Header />

        <CoverImg
          style={{
            background: `url(${musicDB.coverUrl}) no-repeat center / cover`,
          }}
        />

        <Title title={musicDB.title} album={musicDB.album} />

        <Bar />

        <Controll />

        <BottomPlay avatar={musicDB.avatar} username={musicDB.username} />
      </Container>
    </Wrap>
  );
};

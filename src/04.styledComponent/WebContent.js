import styled from "styled-components";
// import { webDB } from "../db";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333;
`;

const ConWrap = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const Con = styled.div`
  width: 30%;
  background-color: #333;
  box-shadow: 0 0 15px rgba(0, 0, 0.4);
`;

const Bg = styled.div`
  width: 100%;
  height: 400px;
`;

const Title = styled.h3`
  margin: 20px 0 10px 15px;
  font-size: 30px;
  font-weight: 800;
`;

const Desc = styled.p`
  line-height: 22px;
  font-weight: 300;
  opacity: 0.8;
  margin-left: 15px;
  padding-bottom: 20px;
`;

export const WebContent = ({ data }) => {
  return (
    // <Wrap>
    //   <ConWrap>
    //     {webDB.map((web) => (
    //       <Con>
    //         <Bg
    //           style={{
    //             background: `url(${web.img}) no-repeat center / cover`,
    //           }}
    //         />
    //         <Title>{web.title}</Title>
    //         <Desc>{web.desc}</Desc>
    //       </Con>
    //     ))}
    //   </ConWrap>
    // </Wrap>

    <Wrap>
      <ConWrap>
        {data.map((web) => (
          <Con key={web.id}>
            <Bg
              style={{
                background: `url(${web.img}) no-repeat center / cover`,
              }}
            />
            <Title>{web.title}</Title>
            <Desc>{web.desc}</Desc>
          </Con>
        ))}
      </ConWrap>
    </Wrap>
  );
};

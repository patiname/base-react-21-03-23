import styled from "styled-components";

const TitleWrap = styled.div`
  text-align: center;
`;

const STitle = styled.div`
  font-size: 26px;
  font-weight: 800;
`;

const Album = styled.div`
  font-size: 18px;
  margin-top: 10px;
  opacity: 0.8;
`;

export const Title = ({ title, album }) => {
  return (
    <TitleWrap>
      <STitle>{title}</STitle>
      <Album>{album}</Album>
    </TitleWrap>
  );
};

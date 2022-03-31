import styled from "styled-components";

const BarContain = styled.div`
  width: 100%;
  margin-top: 50px;
`;

const BarWrap = styled.div`
  width: 100%;
  height: 6px;
  background-color: gray;
  border-radius: 5px;
`;

const SBar = styled.div`
  width: 10%;
  height: 6px;
  border-radius: 5px;
  background-color: salmon;
`;

const TimeWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const TimeItems = styled.div``;

export const Bar = () => {
  return (
    <BarContain>
      <BarWrap>
        <SBar />
      </BarWrap>

      <TimeWrap>
        <TimeItems>00:03</TimeItems>
        <TimeItems>03:40</TimeItems>
      </TimeWrap>
    </BarContain>
  );
};

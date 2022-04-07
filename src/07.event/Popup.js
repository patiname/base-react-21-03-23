import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: teal;
`;

const PopBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: gray;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: ${(props) => props.show};
`;

const Close = styled.div`
  font-size: 30px;
  cursor: pointer;
`;

export const Popup = () => {
  const [hidden, setHidden] = useState("none");

  const handleClick = () => {
    setHidden("block");
  };

  const handleClose = () => {
    setHidden("none");
  };

  return (
    <div>
      <Box onClick={handleClick}></Box>
      <PopBox show={hidden}>
        <Close onClick={handleClose}>X</Close>
      </PopBox>
    </div>
  );
};

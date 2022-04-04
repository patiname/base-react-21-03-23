import { useState } from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.bgColor};
`;

export const ColorChange = () => {
  const [color, setColor] = useState("salmon");

  const handleClick = () => {
    setColor("crimson");
  };

  return (
    <div>
      <Box bgColor={color} onClick={handleClick}></Box>
    </div>
  );
};

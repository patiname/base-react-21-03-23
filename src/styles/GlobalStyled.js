import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainFont = {
  titleSize: "50px",
  titleColor: "salmon",
  descSize: "18px",
  descColor: "#808080",
};

export const GlobalStyled = createGlobalStyle`
    ${reset}

    *{
        box-sizing: border-box;
    }

    a{
        color:black;
        text-decoration: none;
    }
`;

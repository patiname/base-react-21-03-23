import styled from "styled-components";
import { mainFont } from "../styles/GlobalStyled";

const Wrap = styled.div`
  display: flex;
`;

const Box = styled.div`
  margin-right: 50px;
  padding: 30px;
`;

const Title = styled.h3`
  font-size: ${(props) => props.titleFontSize};
  color: ${(props) => props.titleColor};
  span {
    color: blue;
  }

  a {
    font-size: 20px;
  }

  &:hover {
    color: red;
  }
`;

const Desc = styled.p`
  font-size: ${(props) => props.descFontSize};
  color: ${(props) => props.descColor};
`;

export const BoxStyle = () => {
  return (
    <Wrap>
      <Box>
        <Title
          titleFontSize={mainFont.titleSize}
          titleColor={mainFont.titleColor}
        >
          <span>
            Th<a href="#">is</a>
          </span>
          is title
        </Title>
        <Desc descFontSize={mainFont.descSize} descColor={mainFont.descColor}>
          kalsdjfkalsdfjldsafjkldsjfkldsjfkldsjfldsfsdfsdf
        </Desc>
      </Box>
      <Box>
        <Title
          titleFontSize={mainFont.titleSize}
          titleColor={mainFont.titleColor}
        >
          <span>This</span> is title
        </Title>
        <Desc descFontSize={mainFont.descSize} descColor={mainFont.descColor}>
          kalsdjfkalsdfjldsafjkldsjfkldsjfkldsjfldsfsdfsdf
        </Desc>
      </Box>
    </Wrap>
  );
};

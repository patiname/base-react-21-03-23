import styled from "styled-components";

const Icon = styled.span`
  font-size: 30px;
`;

const HOne = styled.h1`
  i {
    font-size: 50px;
  }
`;

export const UseFontAwsome = () => {
  return (
    <div>
      <h1>
        메뉴아이콘: <Icon className="fa-solid fa-bars"></Icon>
      </h1>
      <h1>
        인스타아이콘: <Icon className="fa-brands fa-instagram"></Icon>
      </h1>
      <HOne>
        Bug: <i className="fa-solid fa-bug"></i>
      </HOne>
    </div>
  );
};

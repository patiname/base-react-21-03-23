import styled from "styled-components";

const BottomPlayer = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  margin-top: 40px;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Avatar = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

const UserName = styled.div`
  margin-left: 10px;
  font-weight: 600;
  color: #1d1d1d;
  font-size: 14px;
`;

const NextBtn = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eee;
  border-radius: 50%;
  border: 1px solid #c1c1c1;
  color: #1d1d1d;
`;

export const BottomPlay = ({ avatar, username }) => {
  return (
    <BottomPlayer>
      <UserWrap>
        <Avatar
          style={{
            background: `url(${avatar}) no-repeat center / cover`,
          }}
        />
        <UserName>{username}</UserName>
      </UserWrap>

      <NextBtn>
        <i className="fa-solid fa-forward-step"></i>
      </NextBtn>
    </BottomPlayer>
  );
};

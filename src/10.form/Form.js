import { useForm } from "react-hook-form";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  font-weight: 700;
`;

const Button = styled.button`
  opacity: ${(props) => props.opacity};
`;

const userInfo = {
  id: 1,
  username: "test",
  password: "123123123",
};

export const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
  });

  const onSubMit = () => {
    // const login = getValues().login;
    // const pwd = getValues().password;
    // console.log(login, pwd);
    const { login, password } = getValues();
    if (login !== userInfo.username) {
      alert("아이디가 틀렸습니다");
    }

    if (password !== userInfo.password) {
      alert("비번이 틀렸습니다");
    }

    alert("로그인 되었습니다");
  };

  //   console.log(watch());
  //   console.log(errors);
  //   console.log(isValid);

  return (
    <div>
      <Title>Login</Title>
      <form onSubmit={handleSubmit(onSubMit)}>
        <input
          {...register("login", {
            required: "아이디는 필수 입니다",
            minLength: {
              value: 3,
              message: "아이디는 3자리 이상 작성 해 주세염~_~",
            },
          })}
          type="text"
          placeholder="아이디를 적어주세요"
        />
        <h1>{errors.login ? errors.login.message : ""}</h1>

        <input
          {...register("password", {
            required: "패스워드는 필수 입니다",
            minLength: {
              value: 8,
              message: "패스워드는 8자리 이상 작성 해주세염~_~",
            },
            // pattern: {
            //   value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            //   message:
            //     "최소 8 자, 대문자 하나 이상, 소문자 하나, 숫자 하나 및 특수 문자 하나 이상",
            // },
          })}
          type="password"
          placeholder="패스워드를 적어주세요"
        />
        <h1>{errors.password && errors.password.message}</h1>
        {/* <h1>{errors?.password && errors?.password?.message}</h1> */}

        <Button opacity={isValid ? "1" : "0.3"}>로그인</Button>
      </form>
    </div>
  );
};

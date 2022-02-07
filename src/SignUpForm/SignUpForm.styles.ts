import styled from "styled-components";

export const SignUpFormRoot = styled.div`
  width: 75%;
  border: 1px black solid;
  border-radius: 5px;
  margin-top: 30px;
  padding: 40px 3%;

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & h1 {
    margin: 0;
  }

  & button {
    margin: 20px;
  }
`;

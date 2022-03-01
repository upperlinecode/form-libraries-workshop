import styled from "styled-components";

export const SignUpFormRoot = styled.div`
  width: 50%;
  border-radius: 5px;
  margin-top: 30px;
  padding: 40px 3% 100px;
  background: var(--light-purple-transparent);
  color: var(--navy);

  & form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  & button {
    margin: 20px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  margin-bottom: 20px;`

export const Label = styled.label`
  font-weight: bold;
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;

  & label {
    font-weight: normal;
  }

  & input {
    margin-bottom: 5px;
    padding-left: 10px;
  }
`;

export const RadioField = styled.input`
  margin-bottom: 20px;
  box-sizing: border-box;
  border-color: var(--dark-purple);
  border-width: 2px;
  border-style: solid;

`;

export const TextField = styled.input`
  margin-bottom: 20px;
  box-sizing: border-box;
  border-color: var(--dark-purple);
  border-width: 2px;
  border-style: solid;
  height: 40px;
  padding-left: 10px;
`;

export const Button = styled.button`
  background: var(--navy);
  color: white;
  width: 100px;
  height: 40px;
  font-weight: bold;
  text-transform: uppercase;
`;

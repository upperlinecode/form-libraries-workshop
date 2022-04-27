import styled from "styled-components";

export const Button = styled.button`
  background: navy;
  color: white;
  width: 100px;
  height: 40px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const RadioGroup = styled.div`
  align-items: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 16px;

  label {
    align-self: flex-start;
  }

  p {
    font-weight: bold;
    margin: 0 0 4px;
  }
`;

export const ErrorMessage = styled.p`
  color: red;
  font-weight: normal !important;
  margin: -20px 0 20px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  box-sizing: border-box;
  border-color: purple;
  border-width: 2px;
  border-style: solid;
  height: 40px;
  padding-left: 10px;
`;

export const Label = styled.label`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-weight: bold;
`;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin-top: 0;
`;

export const Root = styled.div`
  align-items: center;
  background-color: rgba(241, 231, 254, 0.8);
  border-radius: 8px;
  border: 1px solid purple;
  display: inline-block;
  min-width: max(50vw, 400px);
  padding: 48px;
  text-align: center;
`;

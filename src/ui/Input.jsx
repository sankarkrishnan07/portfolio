import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: none;
  background: rgb(255, 255, 255, 0.1);
  font-size: 0.875rem;
  font-family: monospace;
  outline: none;

  &:focus,
  &:focus-visible,
  &:focus-within {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.75);
  }
`;

export default Input;

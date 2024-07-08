import styled from "styled-components";

const Textarea = styled.textarea`
   padding: 0.8rem 1.2rem;
  border: none;
  background: rgb(255, 255, 255, 0.1);
  font-size: 0.875rem;
  outline: none;
  resize: none;

  &:focus,
  &:focus-visible,
  &:focus-within {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.75);
  }
`

export default Textarea;
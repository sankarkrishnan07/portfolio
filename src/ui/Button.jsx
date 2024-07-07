import styled, { css } from "styled-components";

const Button = styled.button.attrs((props) => ({
  type: props.type ? props.type : "button",
}))`
  ${(props) =>
    props.variant === "icon" &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      svg {
        height: 2rem;
        width: 2rem;
        fill: #61892f;

        &:hover {
          fill: #fff;
        }

        ${(props) =>
          props.size === "large" &&
          css`
            height: 2.5rem;
            width: 2.5rem;
          `}
      }

      &:disabled {
        svg {
          fill: gray;
        }
      }
    `}
`;

export default Button;

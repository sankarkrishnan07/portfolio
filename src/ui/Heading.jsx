import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 4rem;
      color: #61892f;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      display: flex;
      align-items: center;
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 1.5rem;
      font-weight: 200;
      margin-bottom: 1.5rem;

      @media (max-width: 650px) {
        font-size: 1.25rem;
      }
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1rem;
      font-weight: 300;
    `}
`;

Heading.defaultProps = {
  as: "h1",
};

export default Heading;

import styled, { css } from "styled-components";

const ProjectImg = styled.div`
  height: 8.75rem;
  display: flex;
  justify-content: center;
  background: #1f1f1f;
  box-shadow: 0 0 2px 0rem rgba(0, 0, 0, 0.3);
  flex: 1 0 auto;

  ${(props) =>
    props.size === "small" &&
    css`
      height: 110px;
      max-width: 200px;
    `}

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

export default ProjectImg;

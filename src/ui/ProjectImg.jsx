import styled, { css } from "styled-components";

const ProjectImg = styled.div`
  height: 8.75rem;
  width: 300px;
  display: flex;
  justify-content: center;
  background: #1f1f1f;
  box-shadow: 0 0 2px 0rem rgba(0, 0, 0, 0.3);

  ${(props) =>
    props.size === "small" &&
    css`
      height: 140px;
      width: 15rem;
    `}

  img {
    height: 100%;
    width: 100%;
    object-fit: ${props => props.size === "small" ? `contain` : `cover`};
  }
`;

export default ProjectImg;

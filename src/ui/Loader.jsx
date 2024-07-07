import styled from "styled-components";
import SKLogo from "./SKLogo";
import PropTypes from "prop-types";

const StyledLoader = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #1f1f1f;
  --logo-fill: transparent;
  --logo-stroke-dashoffset: 1000;

  svg {
    height: 250px;
    stroke-dasharray: 1000;
    & > * {
      fill: var(--logo-fill);
      stroke-dashoffset: var(--logo-stroke-dashoffset);
    }
  }
`;

function Loader({ innerRef }) {
  return (
    <StyledLoader ref={innerRef}>
      <SKLogo />
    </StyledLoader>
  );
}

Loader.propTypes = {
  innerRef: PropTypes.any,
};

export default Loader;

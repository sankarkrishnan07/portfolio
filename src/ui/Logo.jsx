import styled from "styled-components";
import SKLogo from "./SKLogo";
import PropTypes from "prop-types";

const StyledLogo = styled.button`
  height: 3.125rem;
  width: 4.6875rem;
  display: inline-flex;
  cursor: pointer;

  svg > * {
    stroke: transparent;
    fill: #61892f;
  }

  @media (max-width: 700px) {
    height: 2.5rem;
    width: 4.0625rem;
  }
`;

function Logo({ handleClick }) {
  return (
    <StyledLogo onClick={handleClick} aria-label="Home">
      <SKLogo />
    </StyledLogo>
  );
}

Logo.propTypes = {
  handleClick: PropTypes.func,
};

export default Logo;

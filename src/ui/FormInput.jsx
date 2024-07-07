import styled from "styled-components";
import PropTypes from "prop-types";

const StyledFormInput = styled.div`
  position: relative;
`;

const Error = styled.span`
  font-family: monospace;
  font-size: 0.75rem;
  color: #f9002ac1;
  position: absolute;
  right: 0;
  bottom: -16px;
`;

function FormInput({ children, error }) {
  return (
    <StyledFormInput>
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormInput>
  );
}

FormInput.propTypes = {
  children: PropTypes.any,
  error: PropTypes.string,
};

export default FormInput;

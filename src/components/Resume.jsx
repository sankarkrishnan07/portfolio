import styled from "styled-components";

const StyledResume = styled.a`
  display: inline-block;
  margin-top: 2.5rem;
  box-shadow: 0 0 0 1px inset #61892f;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

function Resume() {
  return (
    <StyledResume
      href="https://drive.google.com/file/d/1XtH2eKwO9ah9CpsjxoId5_-pzaebF6O5/view?usp=drivesdk"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </StyledResume>
  );
}

export default Resume;

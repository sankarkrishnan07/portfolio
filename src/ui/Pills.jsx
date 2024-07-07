import styled from "styled-components";

const Pills = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;

  span {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    color: rgba(255, 255, 255, 0.6);
    border-radius: 40px;
    box-shadow: 0 0 2px 0 currentColor;
  }
`;

export default Pills;

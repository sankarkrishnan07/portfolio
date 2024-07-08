import { useState } from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import Select from "./Select";

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 700px) {
    display: none;
  }
`;

const FilterButton = styled.button`
  font-size: 1rem;
  border-radius: 4px;
  background: transparent;
  box-shadow: 0 0 2px 0 #3f3f3f;
  padding: 4px 8px;

  ${(props) =>
    props.active &&
    css`
      background: #3f3f3f;
    `}
`;

function Filter({ options = [], activeFilter = {}, setActiveFilter }) {
  const [active, setActive] = useState(activeFilter);

  function handleClick(value) {
    setActive(value);
    setActiveFilter(value);
  }

  return (
    <>
      <StyledFilter>
        {options.map((option) => (
          <FilterButton
            onClick={() => handleClick(option)}
            active={active.value === option.value}
            key={option.value}
          >
            {option.label}
          </FilterButton>
        ))}
      </StyledFilter>
      <Select
        options={options}
        active={active}
        selectionEmitter={setActiveFilter}
      />
    </>
  );
}

Filter.propTypes = {
  options: PropTypes.array,
  activeFilter: PropTypes.any,
  setActiveFilter: PropTypes.func,
};

export default Filter;

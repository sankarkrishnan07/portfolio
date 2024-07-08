import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { keyDownHandler } from "../handlers/keyDownHandler";
import ArrowDownIcon from "./ArrowDownIcon";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledSelect = styled.button`
  border-radius: 4px;
  background: transparent;
  box-shadow: 0 0 2px 0 #3f3f3f;
  padding: 4px 8px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    height: 1rem;
    width: 1rem;
    fill: rgba(255, 255, 255, 0.5);
    transition: all 0.5s;

    ${(props) =>
      props.isOpen &&
      css`
        rotate: 180deg;
      `}
  }
`;

const Option = styled.button`
  padding: 4px 8px;
  width: 100%;
  border-radius: 4px;
  outline: none;
  display: inline-flex;
  box-shadow: 0 -1px 0 0 inset #3f3f3f;

  &:hover,
  &:focus {
    background: #3f3f3f;
  }

  &:focus-visible {
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.1);
  }
`;

const OptionsWrap = styled.div`
  position: absolute;
  top: 30px;
  right: 0;
  background: #1f1f1f;
  border-radius: 4px;
  box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.4);
`;

const SelectWrap = styled.div`
  position: relative;
  z-index: 9;
  max-width: 150px;
  width: 100%;
  font-size: 0.875rem;

  display: none;

  @media (max-width: 700px) {
    display: inline-flex;
  }
`;

function Select({ options = [], selectionEmitter, active }) {
  const [isOpen, setIsopen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(active);

  const ref = useOutsideClick(() => setIsopen(false));
  const selectEl = useRef();
  const optionEls = useRef([]);

  function handleClick() {
    setIsopen((open) => !open);
  }

  function handleSelection(value) {
    const selected = options.find((option) => value === option.value);
    setSelectedOption(selected);
    selectionEmitter && selectionEmitter(selected);
    handleClick();
  }

  function handleKeyDown(e) {
    keyDownHandler(
      e,
      selectEl,
      optionEls,
      isOpen,
      setIsopen,
      handleSelection,
      handleClick
    );
  }

  return (
    <SelectWrap ref={ref}>
      <StyledSelect
        type="button"
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        ref={selectEl}
        isOpen={isOpen}
      >
        {selectedOption.label}
        <ArrowDownIcon />
      </StyledSelect>
      {isOpen && (
        <OptionsWrap>
          {options.map((option) => (
            <Option
              onClick={() => handleSelection(option.value)}
              onKeyDown={handleKeyDown}
              key={option.value}
              ref={(el) => optionEls.current.push(el)}
              value={option.value}
            >
              {option.label}
            </Option>
          ))}
        </OptionsWrap>
      )}
    </SelectWrap>
  );
}

Select.propTypes = {
  options: PropTypes.array,
  active: PropTypes.any,
  selectionEmitter: PropTypes.func,
};

export default Select;

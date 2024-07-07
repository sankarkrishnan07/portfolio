import { cloneElement, createContext, useContext, useState } from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import CloseIcon from "./CloseIcon";
import { createPortal } from "react-dom";
import Button from "./Button";
import useOutsideClick from "../hooks/useOutsideClick";

const grow = keyframes`
  100% {
    scale: 1;
    opacity: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  backdrop-filter: blur(4px);
  z-index: 1000;
  transition: all 1s;
  scale: 0.2;
  opacity: 0;
  animation: ${grow} 0.5s ease forwards;
`;

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 0.25rem;
  padding: 1.5rem 3rem;
  transition: all 0.5s;
  background-color: #1f1f1f;
  box-shadow: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  width: 45rem;

  @media (max-width: 792px) {
    width: 35rem;
  }

  @media (max-width: 600px) {
    width: 25rem;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  right: 1.25rem;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    height: 1rem;
    width: 1rem;
    fill: #fff;
    stroke-width: 2px;
  }
`;

const ModalContext = createContext();

export default function Modal({ children }) {
  const [activeId, setActiveid] = useState("");

  const close = () => setActiveid("");
  const open = setActiveid;

  return (
    <ModalContext.Provider value={{ activeId, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Trigger({ children, id, isCard }) {
  const { open } = useContext(ModalContext);
  return isCard ? (
    <a
      href="#"
      role="button"
      onClick={(e) => {
        e.preventDefault();
        open(id);
      }}
    >
      {children}
    </a>
  ) : (
    <Button onClick={() => open(id)}>{children}</Button>
  );
}

function Window({ children, id }) {
  const { activeId, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);

  if (activeId !== id) return;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <CloseButton onClick={close}>
          <CloseIcon />
        </CloseButton>
        {cloneElement(children, { handleClose: close })}
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Trigger = Trigger;
Modal.Window = Window;

Modal.propTypes = {
  children: PropTypes.any,
};

Trigger.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
  isCard: PropTypes.bool,
};

Window.propTypes = {
  children: PropTypes.any,
  id: PropTypes.any,
};

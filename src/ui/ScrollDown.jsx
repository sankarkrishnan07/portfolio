import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import styled from "styled-components";

const Mouse = styled.div`
  width: 20px;
  height: 35px;
  position: absolute;
  right: 20px;
  bottom: 20px;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  border-radius: 10px;
`;

const Wheel = styled.span`
  width: 4px;
  height: 10px;
  background: rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 5px;
  left: 50%;
  border-radius: 10px;
  transform: translateX(-50%);
`;

function ScrollDown() {
  const mouse = useRef();

  useGSAP(() => {
    if (mouse.current) {
      const tl = gsap.timeline();

      tl.fromTo(mouse.current, { opacity: 0 }, { opacity: 1, delay: 7 }).to(
        mouse.current.children,
        {
          y: 10,
          repeat: -1,
          duration: 1.5,
          opacity: 0,
        }
      );
    }
  }, []);

  return (
    <Mouse ref={mouse}>
      <Wheel />
    </Mouse>
  );
}

export default ScrollDown;
